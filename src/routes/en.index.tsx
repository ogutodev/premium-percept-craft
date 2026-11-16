import { createFileRoute } from "@tanstack/react-router";
import { HomePage, HERO_IMAGE } from "@/components/pages/home";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  staticData: { sitemap: true },
  head: () => {
    const h = pageHead("home", "en");
    return {
      ...h,
      links: [...(h.links ?? []), { rel: "preload", as: "image", href: HERO_IMAGE, fetchPriority: "high" }],
    };
  },
  component: HomePage,
});
