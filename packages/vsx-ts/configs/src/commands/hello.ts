import { getDebugChannel } from '../settings.js';

export async function hello(): Promise<void> {
	const channel = getDebugChannel(true)!;

	channel.appendLine('Hello!');
}
