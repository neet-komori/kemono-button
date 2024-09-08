import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "Kemono Button",
        namespace: "https://github.com/neet-komori",
        version: "2.0.6",
        author: "neet-komori",
        description: "Add button to access artist's page on Kemono or Coomer",
        icon: "https://kemono.su/static/favicon.ico",
        downloadURL: "https://raw.githubusercontent.com/neet-komori/kemono-button/main/dist/kemono-button.user.js",
        updateURL: "https://raw.githubusercontent.com/neet-komori/kemono-button/main/dist/kemono-button.meta.js",
        supportURL: "https://github.com/neet-komori/kemono-button/issues",
        license: "GPL-3.0-or-later",
        match: [
          "https://onlyfans.com/*",
          "https://fansly.com/*",
          "https://fantia.jp/*",
          "https://www.patreon.com/*",
          "https://*.fanbox.cc/*",
          "https://www.fanbox.cc/*",
        ],
        require: [""],
      },
      build: {
        metaFileName: true,
        externalGlobals: {
          react: cdn.jsdelivr("React", "umd/react.production.min.js"),
          "react-dom": cdn.jsdelivr("ReactDOM", "umd/react-dom.production.min.js"),
        },
      },
    }),
  ],
});
