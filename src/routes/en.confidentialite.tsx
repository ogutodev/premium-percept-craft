import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/pages/privacy-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/confidentialite")({
  staticData: { sitemap: true },
  head: () => pageHead("privacy", "en"),
  component: PrivacyPage,
});
