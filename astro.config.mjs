// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
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
  // Conditional server-side configuration
  ...(process.env.NODE_ENV === "production" && {
    output: "server",
    adapter: node({
      mode: "standalone",
    }),
  }),
});
