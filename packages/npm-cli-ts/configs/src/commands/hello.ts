import c from 'ansi-colors';
import enquirer from 'enquirer';

export async function hello(name: string | undefined): Promise<void> {
	if(!name) {
		const response = await enquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What\'s your name?'
			},
		]) as { name: string };

		name = response.name;
	}

	console.log(`Hello ${c.bold(name)}!`);
}
