import logger from '@zokugun/cli-utils/logger';
import { type CliOptions } from './types.js';

export async function run(options: CliOptions): Promise<void> {
	logger.begin();

	logger.finish();
}
