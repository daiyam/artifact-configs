import logger from '@zokugun/cli-utils/logger';

export type Options = {
};

export async function run(options: Options): Promise<void> {
	logger.beginTimer();

	logger.finishTimer();
}
