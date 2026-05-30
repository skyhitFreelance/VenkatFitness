import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split MUI into its own chunk (it's the biggest vendor)
          'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          // Split React ecosystem separately
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Split Swiper separately
          'vendor-swiper': ['swiper'],
          // Split react-slick separately
          'vendor-slick': ['react-slick', 'slick-carousel'],
          // Split GraphQL client
          'vendor-graphql': ['graphql-request', 'graphql'],
        },
      },
    },
    // Increase warning threshold to avoid false alarms after splitting
    chunkSizeWarningLimit: 600,
  },
});
