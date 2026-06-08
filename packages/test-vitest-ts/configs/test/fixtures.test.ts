import fse from '@zokugun/fs-extra-plus/sync';
import { xtry } from '@zokugun/xtry/sync';
import { expect, it } from 'vitest';
import YAML from 'yaml';
import {} from '../src/index.js';

const ROOT = fse.join('.', 'test', 'fixtures', 'group');

const files = fse.walk(ROOT, {
	absolute: true,
	onlyFiles: true,
	collect: true,
	filter: (item) => item.path.endsWith('.yml'),
});

if(files.fails) {
	throw files.error;
}

for(const file of files.value) {
	const name = fse.leafName(file.path, 1);

	it(name, () => {
		const content = fse.readFile(file.path, 'utf8');
		if(content.fails) {
			throw content.error;
		}

		const document = xtry(() => YAML.parse(content.value) as unknown);
		if(document.fails) {
			throw document.error;
		}

		const result = doSomething(document.value);

		try {
			expect(result).to.eql(expected);
		}
		catch (error) {
			console.log(YAML.stringify(result));

			throw error;
		}
	});
}
