// Static build used for hosting the site on plain Apache hosting (DirectAdmin).
// Every page is pre-rendered to HTML so no Node/Worker server is required.
// Normal Lovable builds keep using vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    pages: [
      { path: "/" },
      { path: "/intake" },
      { path: "/algemene-voorwaarden" },
      { path: "/privacyverklaring" },
    ],
  },
  nitro: {
    preset: "static",
    output: {
      dir: ".output-static",
      publicDir: ".output-static/public",
    },
  },
});
