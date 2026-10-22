# Project rules

- i18n: French is default at `/`; Portuguese and English live under `/pt/*` and `/en/*`. Each page body is a component in `src/components/pages/<page>-<locale>.tsx`; route files stay thin and call `pageHead()` from `src/lib/seo.ts` (which emits canonical + hreflang). Why: separate copy per language keeps premium hand-written translations; any page content change must be applied to all three locale files.
- Shared chrome (nav, footer, contact form, case study, privacy) localizes itself via `useLocale()` and the `ui` dictionary in `src/lib/i18n.ts`. Why: one implementation for cross-page components.
- Contact form submissions are stored in the `contact_submissions` table via the `submitContact` server function (anon insert-only RLS). Why: every lead must be persisted, not only sent to WhatsApp.
- Editable links/media (Calendly URL, showreel files) live in `src/lib/site-config.ts`. Why: single place to fill in owner-provided values.
- Case-study content lives in `src/lib/projects.ts` (French only for now).
- Prerender: every public page is listed in `vite.config.ts` `pages` (per locale, incl. case-study slugs); router uses `trailingSlash: "preserve"` because the prerenderer requests trailing-slash URLs and redirects otherwise loop. Add new pages/slugs there. Why: Google gets full HTML without JS.
- Sitemap: `src/routes/sitemap[.]xml.ts` derives static URLs from each route's required `staticData.sitemap`; case-study slugs come from `src/lib/projects.ts`.
- Images: assets are WebP; below-the-fold `<img>` use `loading="lazy"`, hero images stay eager.
