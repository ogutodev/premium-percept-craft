import { createFileRoute } from "@tanstack/react-router";
import { ContenusPage } from "@/components/pages/contenus-en";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/contenus")({
  head: () => pageHead("contenus", "en"),
  component: ContenusPage,
});
