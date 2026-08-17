import { vitest } from '@zokugun/eslint-config-test';

export default configure([
	typescript(),
	vitest(),
	importX(),
]);
