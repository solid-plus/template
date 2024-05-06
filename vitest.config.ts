/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
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
    testTransformMode: { web: ["/.[jt]sx?$/"] }
  }
});
