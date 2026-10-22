import { createFileRoute } from "@tanstack/react-router";
import { ContenusPage } from "@/components/pages/contenus-fr";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contenus")({
  staticData: { sitemap: true },
  head: () => pageHead("contenus", "fr"),
  component: ContenusPage,
});
