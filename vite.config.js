import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
  },
  base: "/MyShoeStore/",
  build: {
    rollupOptions: {
      external: [
        "/MyShoeStore/assets/index-B6NKKOq8.js",
        "/MyShoeStore/assets/index-C-SyxxqC.css",
      ],
    },
  },
});
