import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/pages/work";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/contenus")({
  staticData: { sitemap: true },
  head: () => pageHead("contenus", "pt"),
  component: WorkPage,
});
