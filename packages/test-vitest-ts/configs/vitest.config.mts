import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	oxc: {
		target: 'es2022',
	},
	resolve: {
		alias: [
			{
				find: '#',
				replacement: path.resolve('src'),
			},
		],
	},
	test: {
		environment: 'node',
		include: ['./test/**/*.test.ts'],
		reporters: 'dot',
		setupFiles: ['./test/vitest.setup.ts'],
		typecheck: {
			enabled: true,
		},
		coverage: {
			reporter: ['html'],
			reportsDirectory: './coverage',
		},
	},
});
