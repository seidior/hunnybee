import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  redirects: {
    "/menu-unused": "/menu"
  },
  site: "https://hunnybee.ca",
  trailingSlash: "never"
});
