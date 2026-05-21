import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: {
    preview: {
      allowedHosts: true
    }
  }
});
