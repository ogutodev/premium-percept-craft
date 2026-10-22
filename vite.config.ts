// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind or Nitro manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// All public pages are identical for every visitor, so they are prerendered to HTML.
const SLUGS = ["espresso-club", "projet-2", "projet-3"];
const BASE = ["/", "/solutions", "/contenus", "/impressum", "/confidentialite", ...SLUGS.map((s) => `/travaux/${s}`)];
const PAGES = ["", "/pt", "/en"].flatMap((pre) =>
  BASE.map((p) => ({ path: pre ? (p === "/" ? pre : pre + p) : p })),
);

// Inside Lovable's build environment the preset is forced to cloudflare-module,
// where nitro's Node prerender cannot render routes (every page 404s).
// Prerender only for external Node builds (Infomaniak).
const isLovableSandbox =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: false },
  },
  nitro: {
    preset: "node-server",
    ...(isLovableSandbox
      ? {}
      : {
          prerender: {
            routes: PAGES.map((page) => page.path),
            crawlLinks: false,
            failOnError: true,
          },
        }),
  } as { preset: string },
});
