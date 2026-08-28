import { importX, perfectionist, stylistic } from '@zokugun/eslint-config-style';
import { typescript } from '@zokugun/eslint-config-ts';

export default configure([
	// configdotts/Language rules
	typescript(),

	// configdotts/Sorting and stylistic rules
	importX(),
	perfectionist(),
	stylistic(),
]);
