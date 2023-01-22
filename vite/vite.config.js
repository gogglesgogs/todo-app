import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 8004,
		strictPort: true
	},
	base: '/todo-app/vite/'
});
