import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/pages/solutions-en";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/solutions")({
  staticData: { sitemap: true },
  head: () => pageHead("solutions", "en"),
  component: SolutionsPage,
});
