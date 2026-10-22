import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages/privacy-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/confidentialite")({
  staticData: { sitemap: true },
  head: () => pageHead("privacy", "fr"),
  component: PrivacyPage,
});
