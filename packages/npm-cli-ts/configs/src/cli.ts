import { Command } from '@zokugun/cli-utils/commander';
import pkg from '../package.json' with { type: 'json' };
import { hello } from './commands/hello.js';
import { run } from './run.js';

const program = new Command();

// Option 1 {{{
program
	.version(pkg.version, '-v, --version')
	.description(pkg.description);

program
	.command('hello')
	.description('print a greeting')
	.argument('[name]')
	.action(hello);

program.parse();
// }}}

// Option 2 {{{
program
	.version(pkg.version, '-v, --version')
	.description(pkg.description)
	.action(run)
	.parse();
// }}}
