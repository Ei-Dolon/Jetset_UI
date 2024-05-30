import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
     loader: { '.js': 'jsx' }
  },
  outDir: "build",
  plugins: [react()],
  server: {
    origin: 'https://jetsetlux.com/dapp',
  },
})
