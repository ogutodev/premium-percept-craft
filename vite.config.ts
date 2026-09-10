// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add TanStack, React, Tailwind or Nitro manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "node-server",
  },
});
