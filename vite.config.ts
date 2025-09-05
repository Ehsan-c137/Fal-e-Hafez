import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         registerType: "autoUpdate",
         workbox: {
            globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf,webp,json}"],
         },
         manifest: {
            name: "Fal-e Hafez",
            short_name: "Hafez",
            description: "Get your fortune from the poems of Hafez.",
            theme_color: "#213547",
            background_color: "#213547",
            display: "standalone",
            scope: "/",
            start_url: "/",
            icons: [
               {
                  src: "icons/icon-48x48.webp",
                  sizes: "48x48",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-72x72.webp",
                  sizes: "72x72",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-96x96.webp",
                  sizes: "96x96",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-128x128.webp",
                  sizes: "128x128",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-144x144.webp",
                  sizes: "144x144",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-152x152.webp",
                  sizes: "152x152",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-192x192.webp",
                  sizes: "192x192",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-256x256.webp",
                  sizes: "256x256",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-384x384.webp",
                  sizes: "384x384",
                  type: "image/webp",
               },
               {
                  src: "icons/icon-512x512.webp",
                  sizes: "512x512",
                  type: "image/webp",
               },
            ],
         },
      }),
   ],
})
