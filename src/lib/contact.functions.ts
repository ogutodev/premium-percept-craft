import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  project_type: z.string().trim().max(200).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  timeline: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(3000).optional().default(""),
  consent: z.literal(true),
  locale: z.enum(["fr", "pt", "en"]),
  /** Honeypot — must stay empty. */
  website: z.string().max(200).optional().default(""),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    // Bots fill the hidden field: pretend success, store nothing.
    if (data.website) return { ok: true };
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const sb = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { website: _hp, ...row } = data;
    const { error } = await sb.from("contact_submissions").insert({
      ...row,
      project_type: row.project_type || "Diagnostic 2027",
      // budget and message are NOT NULL in the table.
      budget: row.budget || "—",
      message: row.message || "—",
      phone: row.phone || null,
      timeline: row.timeline || null,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("insert_failed");
    }
    return { ok: true };
  });
