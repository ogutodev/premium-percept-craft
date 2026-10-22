import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/pages/solutions-pt";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/solutions")({
  head: () => pageHead("solutions", "pt"),
  component: SolutionsPage,
});
