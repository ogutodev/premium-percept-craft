import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { projects } from "@/lib/projects";

const BASE_URL = "https://premium-percept-craft.lovable.app";

const CASE_ROUTES = [
  { routeId: "/travaux/$slug", to: "/travaux/$slug" },
  { routeId: "/pt/travaux/$slug", to: "/pt/travaux/$slug" },
  { routeId: "/en/travaux/$slug", to: "/en/travaux/$slug" },
] as const;

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        for (const { routeId, to } of CASE_ROUTES) {
          for (const p of projects) {
            const location = router.buildLocation({ to, params: { slug: p.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
