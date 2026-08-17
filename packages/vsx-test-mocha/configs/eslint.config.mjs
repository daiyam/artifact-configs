import { mocha } from '@zokugun/eslint-config-test';

export default configure([
	typescript(),
	mocha(),
	importX(),
]);
