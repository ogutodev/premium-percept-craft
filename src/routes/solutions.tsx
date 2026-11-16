import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages/services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  staticData: { sitemap: true },
  head: () => pageHead("solutions", "fr"),
  component: ServicesPage,
});
