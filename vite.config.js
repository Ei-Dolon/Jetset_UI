import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/JetsetUI/",
  build: {
    loader: { '.js': 'jsx' }
  },
  outDir: "build",
  plugins: [react()],
  server: {
    origin: 'https://jetsettoken.com/dapp/jetsetui/',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
});

