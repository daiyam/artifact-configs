import { Command } from 'commander';
import pkg from '../package.json';
import { hello } from './commands/hello.js';

const program = new Command();

program
	.version(pkg.version, '-v, --version')
	.description(pkg.description);

program
	.command('hello')
	.description('print a greeting')
	.argument('[name]')
	.action(hello);

program.parse();
