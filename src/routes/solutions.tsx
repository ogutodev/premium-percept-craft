import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/pages/solutions-fr";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  staticData: { sitemap: true },
  head: () => pageHead("solutions", "fr"),
  component: SolutionsPage,
});
