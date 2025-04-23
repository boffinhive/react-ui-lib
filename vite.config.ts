import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js", // Point to your PostCSS config
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactUiLib",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "primereact", "primeicons"],
    },
  },
});
