import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  project_type: z.string().trim().min(1).max(60),
  budget: z.string().trim().min(1).max(60),
  timeline: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(3000),
  consent: z.literal(true),
  locale: z.enum(["fr", "pt", "en"]),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
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
    const { error } = await sb.from("contact_submissions").insert({
      ...data,
      phone: data.phone || null,
      timeline: data.timeline || null,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("insert_failed");
    }
    return { ok: true };
  });
