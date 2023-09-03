import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  site: "https://hunnybee.ca",
  trailingSlash: "never",
  vite: {
    optimizeDeps: {
      exclude: ["sharp"]
    }
  }
});
