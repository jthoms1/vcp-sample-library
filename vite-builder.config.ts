import { defineConfig } from "vite";
import { builderDevTools } from "@builder.io/dev-tools/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), builderDevTools()],
});
