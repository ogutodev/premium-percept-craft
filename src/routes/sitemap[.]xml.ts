import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapPathForLocation, sitemapStaticPaths } from "@/lib/sitemap";
import { projects } from "@/lib/projects";
import { SITE_URL, LOCALES, HREFLANG_CODES, lp, stripLocale } from "@/lib/i18n";

// Date of the last significant content change, per French path (update when a page's content changes).
const LASTMOD: Record<string, string> = {
  "/": "2026-11-16",
  "/solutions": "2026-11-16",
  "/travaux/espresso-club": "2026-11-16",
  "/travaux/us-geneve-ville": "2026-11-16",
};

const CASE_ROUTES = ["/travaux/$slug", "/pt/travaux/$slug", "/en/travaux/$slug"] as const;
const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const paths = new Set(sitemapStaticPaths(router));
        for (const to of CASE_ROUTES) {
          for (const p of projects) {
            const location = router.buildLocation({ to, params: { slug: p.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, to);
            if (path) paths.add(path);
          }
        }
        const urls = [...paths].sort().map((path) => {
          const fr = stripLocale(path);
          const alts = LOCALES.map(
            (l) => `<xhtml:link rel="alternate" hreflang="${HREFLANG_CODES[l]}" href="${esc(SITE_URL + lp(l, fr))}"/>`,
          ).join("");
          const lastmod = LASTMOD[fr] ? `<lastmod>${LASTMOD[fr]}</lastmod>` : "";
          return `<url><loc>${esc(SITE_URL + path)}</loc>${lastmod}${alts}<xhtml:link rel="alternate" hreflang="x-default" href="${esc(SITE_URL + fr)}"/></url>`;
        });
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
