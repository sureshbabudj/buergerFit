import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa";
import path from "path";

const manifest: ManifestOptions = {
  name: "BürgerFit",
  short_name: "BürgerFit",
  id: "buergerfit",
  scope: "/",
  description:
    "Prepare for the German Einbürgerungstest with BürgerFit - an interactive quiz app covering civics, history, and regional knowledge. Track your progress and study smarter.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  orientation: "portrait",
  dir: "ltr",
  lang: "en",
  icons: [
    {
      src: "/assets/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/assets/manifest-icon-192.maskable.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/assets/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/assets/manifest-icon-512.maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  display_override: ["window-controls-overlay", "standalone", "browser"],
  categories: [
    "education",
    "quiz",
    "test-preparation",
    "civics",
    "germany",
    "einbuergerungstest",
    "interactive-learning",
    "progress-tracking",
    "history",
    "regional-knowledge",
    "civic-education",
    "leben-in-deutschland",
    "german-citizenship",
    "german-history",
    "german-culture",
    "german-quiz",
  ],
  screenshots: [
    {
      src: "/assets/screenshots/buergerfit.web.app_about.png",
      sizes: "750x3248",
      type: "image/png",
      description: "Screenshot of the About page",
    },
    {
      src: "/assets/screenshots/buergerfit.web.app_mocktest.png",
      sizes: "750x1334",
      type: "image/png",
      description: "Screenshot of the Mock Test page",
    },
    {
      src: "/assets/screenshots/buergerfit.web.app_performance.png",
      sizes: "750x1334",
      type: "image/png",
      description: "Screenshot of the Performance page",
    },
    {
      src: "/assets/screenshots/buergerfit.web.app_progress.png",
      sizes: "750x1334",
      type: "image/png",
      description: "Screenshot of the Progress page",
    },
    {
      src: "/assets/screenshots/buergerfit.web.app_question.png",
      sizes: "750x1334",
      type: "image/png",
      description: "Screenshot of the Question page (light mode)",
    },
    {
      src: "/assets/screenshots/buergerfit.web.app_question_dark.png",
      sizes: "750x1334",
      type: "image/png",
      description: "Screenshot of the Question page (dark mode)",
    },
  ],
  theme_color_dark: "#18181b",
  background_color_dark: "#18181b",
} as any;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest,
    }),
  ],
  server: {
    port: 3023,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
