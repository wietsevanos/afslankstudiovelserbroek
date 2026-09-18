// Static build used for hosting the site on plain Apache hosting (DirectAdmin).
// Every page is pre-rendered to HTML so no Node/Worker server is required.
// Normal Lovable builds keep using vite.config.ts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoStaticPathsDiscovery: false,
      autoSubfolderIndex: true,
    },
    pages: [
      { path: "/" },
      { path: "/intake" },
      { path: "/algemene-voorwaarden" },
      { path: "/privacyverklaring" },
      { path: "/beheer" },
    ],
  },
  nitro: false,
});
