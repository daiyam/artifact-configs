import fse from '@zokugun/fs-extra-plus/sync';
import { xtry } from '@zokugun/xtry/sync';
import { expect } from 'chai';
import YAML from 'yaml';

describe('fold', () => {
	function prepare(file: string) {
		const name = fse.leafName(file, 1);

		it(name, () => {
			const content = fse.readFile(file, 'utf8');
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

	const files = fse.walk(fse.join(__dirname, '..', '..', 'test', 'fixtures'), {
		absolute: true,
		collect: true,
		onlyFiles: true,
		traverseAll: true,
		filter: (item) => !item.path.endsWith('.yml'),
	});

	if(files.fails) {
		throw files.error;
	}

	for(const file of files.value) {
		prepare(file.path);
	}
});
