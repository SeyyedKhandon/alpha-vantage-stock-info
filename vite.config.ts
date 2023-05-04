/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
// https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "AlphaVantage Stock Info Dashboard",
        short_name: "AlphaDash",
        description: "An admin template for AlphaVantage Stock Info",
        theme_color: "#1a1d27",
        start_url: "index.html",
        display: "standalone",
        background_color: "#fdfdfd",
        orientation: "portrait-primary",
        icons: [
          {
            src: "/pwa/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "Maskable Icon for dashboard",
          },
          {
            src: "/pwa/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/pwa/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/pwa/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/pwa/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/pwa/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/pwa/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/testSetup.ts",
    css: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
