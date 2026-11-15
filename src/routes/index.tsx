import { createFileRoute } from "@tanstack/react-router";
import { HomePage, HERO_IMAGE_FR } from "@/components/pages/home-fr";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => {
    const h = pageHead("home", "fr");
    return {
      ...h,
      links: [...(h.links ?? []), { rel: "preload", as: "image", href: HERO_IMAGE_FR, fetchPriority: "high" }],
    };
  },
  component: HomePage,
});
