import { type CliOptions } from './types.js';
import * as logger from './utils/logger.js';

export async function run(options: CliOptions): Promise<void> {
	const start = Date.now();


	const duration = Math.ceil((Date.now() - start) / 1000);

	logger.finish(duration);
}
