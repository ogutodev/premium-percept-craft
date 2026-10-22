import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home-en";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () => pageHead("home", "en"),
  component: HomePage,
});
