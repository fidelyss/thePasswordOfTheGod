import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc"
import path from "node:path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@assets": path.resolve(__dirname, "./attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
})