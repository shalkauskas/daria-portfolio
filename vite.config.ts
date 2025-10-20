/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true, port: 5179 },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
