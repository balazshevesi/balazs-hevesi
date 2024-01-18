import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), relativeLinks()],
  // base: "balazs-hevesi/",
});
