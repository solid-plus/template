/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";
import solidPlugin from "vite-plugin-solid";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [solidPlugin(), eslint()],
  server: {
    port: 3000
  },

  build: {
    target: "esnext"
  },

  test: {
    environment: "jsdom",
    globals: true,
    testTransformMode: { web: ["/.[jt]sx?$/"] },
    coverage: {
      // ./index.(js|jsx|ts|tsx) is barrel file
      exclude: ["*/index.[jt]s?(x)", ...coverageConfigDefaults.exclude]
    }
  }
});
