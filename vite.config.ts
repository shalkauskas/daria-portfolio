/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { open: true, port: 5177 },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
