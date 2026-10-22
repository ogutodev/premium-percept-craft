import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home-fr";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => pageHead("home", "fr"),
  component: HomePage,
});
