import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 5173,
    host: true,
  },

  build: {
    target: 'es2020',
    // Raise the warning limit slightly — framer-motion is large but tree-shaken
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split heavy libs into separate chunks so browsers can cache them independently
        manualChunks: {
          react:  ['react', 'react-dom'],
          motion: ['framer-motion'],
          lenis:  ['lenis'],
        },
      },
    },
    // Inline small assets (< 4 KB) as base64 to save round-trips
    assetsInlineLimit: 4096,
    // Remove console.* and debugger statements from production bundle
    minify: 'esbuild',
    sourcemap: false,
  },
});
