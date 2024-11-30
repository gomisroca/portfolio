// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

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
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: { mdi: ["*"] },
    }),
  ],
});
