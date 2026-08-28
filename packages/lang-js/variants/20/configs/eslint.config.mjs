import { configure, gitignore, ignores } from '@zokugun/eslint-config';
import { json, jsonc, yaml } from '@zokugun/eslint-config-data';
import { glossary } from '@zokugun/eslint-config-glossary';
import { javascript, regexp } from '@zokugun/eslint-config-js';
import { markdown } from '@zokugun/eslint-config-md';
import { nodejs } from '@zokugun/eslint-config-nodejs';

export default configure([
	// configdotts/Ignore rules
	ignores(),
	gitignore(),

	// configdotts/Documentation rules
	glossary(),
	markdown(),

	// configdotts/Runtime rules
	nodejs(),

	// configdotts/Language rules
	javascript(),

	// configdotts/Language-feature rules
	regexp(),

	// configdotts/Testing rules

	// configdotts/Sorting and stylistic rules

	// configdotts/Data-format rules
	json(),
	jsonc(),
	yaml(),
]);
