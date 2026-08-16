import { importX, perfectionist, stylistic } from '@zokugun/eslint-config-style';
import { typescript } from '@zokugun/eslint-config-ts';

export default configure([
	nodejs(),
	stylistic(),
	javascript(),
	typescript(),
	importX(),
	perfectionist(),
	regexp(),
]);
