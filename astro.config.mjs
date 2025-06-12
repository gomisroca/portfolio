// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  site: "https://gomisroca.github.io",
  base: "portfolio",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "cat", "de"],
  },
  integrations: [
    mdx(),
    react(),
    icon({
      include: { mdi: ["*"], ri: ["twitter-x-fill"] },
    }),
  ],
  // Conditional server-side configuration
  ...(process.env.NODE_ENV === "docker-production" && {
    output: "server",
    adapter: node({
      mode: "standalone",
    }),
  }),
});
