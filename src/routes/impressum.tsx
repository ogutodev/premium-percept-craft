import { createFileRoute } from "@tanstack/react-router";
import { ImpressumPage } from "@/components/pages/impressum-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  staticData: { sitemap: true },
  head: () => pageHead("impressum", "fr"),
  component: ImpressumPage,
});
