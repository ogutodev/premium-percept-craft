import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/pages/solutions-pt";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/solutions")({
  staticData: { sitemap: true },
  head: () => pageHead("solutions", "pt"),
  component: SolutionsPage,
});
