import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(async () => ({
	plugins: [tailwindcss(), sveltekit()],
}));
