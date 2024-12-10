// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  site: "https://gomisroca.github.io",
  base: "portfolio",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "cat", "de"],
  },
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: { mdi: ["*"] },
    }),
  ],
});
