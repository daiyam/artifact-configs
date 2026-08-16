import { configure, gitignore, ignores } from '@zokugun/eslint-config';
import { json, jsonc, yaml } from '@zokugun/eslint-config-data';
import { javascript, regexp } from '@zokugun/eslint-config-js';
import { markdown } from '@zokugun/eslint-config-md';
import { nodejs } from '@zokugun/eslint-config-nodejs';

export default configure([
	ignores(),
	gitignore(),
	nodejs(),
	javascript(),
	regexp(),
	json(),
	jsonc(),
	yaml(),
	markdown(),
]);
