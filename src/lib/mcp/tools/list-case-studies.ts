import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/i18n";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description: "List TRÍADE's published case studies (name, service, location, page link).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    // Skip entries still waiting for real content (names in [brackets]).
    const items = projects
      .filter((p) => !p.name.startsWith("["))
      .map((p) => ({ name: p.name, service: p.service, location: p.location, url: `${SITE_URL}/travaux/${p.slug}` }));
    return {
      content: [
        {
          type: "text",
          text: items.length ? items.map((i) => `${i.name} — ${i.service} · ${i.location} (${i.url})`).join("\n") : "No case studies published yet.",
        },
      ],
      structuredContent: { caseStudies: items },
    };
  },
});
