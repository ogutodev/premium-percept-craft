import { createFileRoute } from "@tanstack/react-router";
import { ContenusPage } from "@/components/pages/contenus-pt";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/contenus")({
  staticData: { sitemap: true },
  head: () => pageHead("contenus", "pt"),
  component: ContenusPage,
});
