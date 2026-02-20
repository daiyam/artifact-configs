import * as vscode from 'vscode';
import { Disposable } from './utils/disposable.js';
import { CONFIG_KEY, getDebugChannel } from './settings.js';

export class DocumentManager implements vscode.Disposable {
	private readonly disposable: Disposable = new Disposable();
	private enabled: boolean = false;

	public activate(context: vscode.ExtensionContext) { // {{{

		vscode.workspace.onDidChangeConfiguration((event) => {
			if(event.affectsConfiguration(CONFIG_KEY)) {
				this.configure();
			}
		});

		context.subscriptions.push(this);
	} // }}}

	public dispose(): void { // {{{
		this.disposable.dispose();
	} // }}}

	private configure(): void { // {{{
		const config = vscode.workspace.getConfiguration(CONFIG_KEY, null);
		const wasEnabled = this.enabled;

		this.enabled = config.get<boolean>('enabled') ?? true;

		if(!this.enabled) {
			this.disposable.dispose();

			return;
		}

		if(!wasEnabled) {

			this.disposable.push(
				vscode.window.onDidChangeActiveTextEditor((editor) => this.onDidChangeActiveTextEditor(editor)),
			);
		}
	} // }}}

	private onDidChangeActiveTextEditor(editor: vscode.TextEditor | undefined): void { // {{{
		if(!editor) {
			return;
		}

		const channel = getDebugChannel(true)!;

		channel.appendLine('onDidChangeActiveTextEditor:', editor.document.fileName);
	} // }}}
}
