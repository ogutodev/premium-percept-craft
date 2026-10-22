// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind or Nitro manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// All public pages are identical for every visitor, so they are prerendered to HTML.
const SLUGS = ["espresso-club", "projet-2", "projet-3"];
const BASE = ["/", "/solutions", "/contenus", "/impressum", "/confidentialite", ...SLUGS.map((s) => `/travaux/${s}`)];
const PAGES = ["", "/pt", "/en"].flatMap((pre) =>
  BASE.map((p) => ({ path: pre ? (p === "/" ? pre : pre + p) : p })),
);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: false },
  },
  nitro: {
    preset: "node-server",
    prerender: {
      routes: PAGES.map((page) => page.path),
      crawlLinks: false,
      failOnError: true,
    },
  },
});
