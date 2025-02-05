/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default getViteConfig({
  plugins: [react()],
  test: {
    onConsoleLog(log) {
      if (log.includes("Not implemented: navigation")) return false;
    },
    exclude: ["e2e", "node_modules"],
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*.tsx"],
      exclude: ["src/**/page.tsx", "src/trpc/react.tsx"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
