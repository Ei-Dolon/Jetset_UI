import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    loader: { '.js': 'jsx' }
  },
  outDir: "build",
  plugins: [react()],
  server: {
    origin: 'https://dapp.jetsettoken.com',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
});

