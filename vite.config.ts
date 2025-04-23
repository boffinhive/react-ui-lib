import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      name: "react-ui-lib",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "primereact", "primeicons"], // Prevent bundling React
    },
  },
});
