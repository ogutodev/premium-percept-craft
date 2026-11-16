import { createFileRoute } from "@tanstack/react-router";
import { WorkPage } from "@/components/pages/work";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/contenus")({
  staticData: { sitemap: true },
  head: () => pageHead("contenus", "en"),
  component: WorkPage,
});
