import { importX, perfectionist, stylistic } from '@zokugun/eslint-config-style';
import { typescript } from '@zokugun/eslint-config-ts';

export default configure([
	regexp(),
	typescript(),
	importX(),
	perfectionist(),
	stylistic(),
]);
