import { vitest } from '@zokugun/eslint-config-test';

export default configure([
	ignores('test/fixtures/**'),
	typescript(),
	vitest(),
	importX(),
]);
