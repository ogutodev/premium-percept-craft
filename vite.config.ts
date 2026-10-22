// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind or Nitro manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

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

// Nitro's prerender() builds a separate "nitro-prerender" server from the raw
// user config. That server never receives the Vite SSR service (the TanStack
// page renderer) that nitro/vite wires into the main build, so every route
// falls through to fetchViteEnv("ssr") -> 404. This module reconnects it:
// it gives the prerender server nitro's ssr-renderer handler and exposes the
// already-built SSR bundle on globalThis.__nitro_vite_envs__ in the build process.
const ssrRendererPath = fileURLToPath(
  new URL("./node_modules/nitro/dist/runtime/internal/vite/ssr-renderer.mjs", import.meta.url),
);
type NitroRenderer = { options: { buildDir: string } };
const connectSsrToPrerender = {
  "prerender:config": (config: { renderer?: { handler?: string } }) => {
    config.renderer = { ...config.renderer, handler: ssrRendererPath };
  },
  "prerender:init": (renderer: NitroRenderer) => {
    const entry = pathToFileURL(
      resolve(renderer.options.buildDir, "vite/services/ssr/index.js"),
    ).href;
    let mod: Promise<{ fetch: (req: Request) => Promise<Response> }> | undefined;
    const g = globalThis as { __nitro_vite_envs__?: Record<string, unknown> };
    g.__nitro_vite_envs__ = {
      ...g.__nitro_vite_envs__,
      ssr: {
        fetch: async (req: Request) => {
          mod ??= import(entry).then((m) => m.default ?? m);
          return (await mod).fetch(req);
        },
      },
    };
  },
};

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
          hooks: connectSsrToPrerender,
          prerender: {
            routes: PAGES.map((page) => page.path),
            crawlLinks: false,
            failOnError: true,
          },
        }),
  } as { preset: string },
});
