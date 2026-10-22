import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home-pt";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/")({
  staticData: { sitemap: true },
  head: () => pageHead("home", "pt"),
  component: HomePage,
});
