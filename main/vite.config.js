import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 7999,
		strictPort: true
	},
	base: '/todo-app/'
});
