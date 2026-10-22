import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return TRÍADE's public contact details (WhatsApp, email, Instagram, location).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      whatsapp: "+41 78 967 05 37",
      whatsappUrl: WHATSAPP_URL,
      email: CONTACT_EMAIL,
      instagram: "https://www.instagram.com/triadepublicite",
      location: "Genève, Suisse — Suisse romande",
      languages: ["fr", "pt", "en"],
    };
    return {
      content: [
        {
          type: "text",
          text: `WhatsApp ${info.whatsapp} (${info.whatsappUrl}) · Email ${info.email} · Instagram @triadepublicite · ${info.location}`,
        },
      ],
      structuredContent: info,
    };
  },
});
