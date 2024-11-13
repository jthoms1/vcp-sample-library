import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/mappings/*",
          dest: "mappings",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/builder-registry.ts"),
      ],
      name: "myLib",
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
