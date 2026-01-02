import { Command } from 'commander';
import pkg from '../package.json' with { type: 'json' };
import { hello } from './commands/hello.js';
import { run } from './run.js';

const program = new Command();

program
	.version(pkg.version, '-v, --version')
	.description(pkg.description);

// Option 1.
program
	.command('hello')
	.description('print a greeting')
	.argument('[name]')
	.action(hello);

// Option 2.
program.action(run);

program.parse();
