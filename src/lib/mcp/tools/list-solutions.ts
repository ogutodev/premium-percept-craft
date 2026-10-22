import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL } from "@/lib/i18n";

const SOLUTIONS = [
  { goal: "Plus de visibilité", services: ["Gestion des réseaux sociaux", "Création de contenu", "Production vidéo"] },
  { goal: "Plus de clients", services: ["Google Ads", "Meta Ads", "Landing pages"] },
  { goal: "Améliorer mon image", services: ["Branding", "Photographie professionnelle", "Création de site internet"] },
  { goal: "Accompagnement complet", services: ["Gestion marketing complète", "Production de contenu mensuelle", "Conseil stratégique"] },
];

export default defineTool({
  name: "list_solutions",
  title: "List solutions",
  description: "List the services TRÍADE offers, grouped by business goal, with a link to the Solutions page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text:
          SOLUTIONS.map((s) => `${s.goal}: ${s.services.join(", ")}`).join("\n") +
          `\nDétails: ${SITE_URL}/solutions`,
      },
    ],
    structuredContent: { solutions: SOLUTIONS.map((s) => ({ goal: s.goal, services: [...s.services] })), url: `${SITE_URL}/solutions` },
  }),
});
