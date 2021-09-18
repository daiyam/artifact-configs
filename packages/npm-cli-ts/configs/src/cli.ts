import { Command } from 'commander';
import pkg from '../package.json';
import { hello } from './commands/hello';

const program = new Command();

program.version(pkg.version);

program
	.command('hello')
	.description('print a greeting')
	.argument('[name]')
	.action(hello);

program.parse();
