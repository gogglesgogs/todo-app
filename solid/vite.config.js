import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 8003,
    strictPort: true
  },
  build: {
    target: 'esnext',
  },
  base: '/todo-app/solid/'
});
