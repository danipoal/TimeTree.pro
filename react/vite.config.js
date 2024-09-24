import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@types': '/src/types',
      // Añade otros alias si es necesario
    }
  }
});
