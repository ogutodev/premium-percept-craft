import { createFileRoute } from "@tanstack/react-router";
import { ImpressumPage } from "@/components/pages/impressum-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/impressum")({
  staticData: { sitemap: true },
  head: () => pageHead("impressum", "pt"),
  component: ImpressumPage,
});
