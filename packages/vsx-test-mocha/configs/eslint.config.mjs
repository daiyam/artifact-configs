import { mocha } from '@zokugun/eslint-config-test';

export default configure([
	ignores('test/fixtures/**'),
	typescript(),
	mocha(),
	importX(),
]);
