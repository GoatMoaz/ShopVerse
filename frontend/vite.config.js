import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // Use 'brotliCompress' for Brotli compression
      ext: '.gz', // Extension for the compressed files
      deleteOriginFile: false, // Keep the original files
      threshold: 10240, // Only compress files larger than 10KB
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
      threshold: 10240,
    }),
  ],
});