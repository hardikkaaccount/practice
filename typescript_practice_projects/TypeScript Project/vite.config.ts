import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/client',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'packages/shared'),
    },
  },
  server: {
    port: 3000,
  },
});