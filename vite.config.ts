import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/home/',  // GitHubリポジトリ名を指定
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});