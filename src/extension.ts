// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { utf8_to_b64, b64_to_utf8 } from "./utils";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-basic-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let copyAsBase64Encoding = vscode.commands.registerCommand('vscode-basic-ext.copyAsBase64Encoding', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			vscode.env.clipboard.writeText(utf8_to_b64(word));
		}
	});

	let copyAsBase64Decoding = vscode.commands.registerCommand('vscode-basic-ext.copyAsBase64Decoding', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			vscode.env.clipboard.writeText(b64_to_utf8(word));
		}
	});

	context.subscriptions.push(copyAsBase64Encoding, copyAsBase64Decoding);
}

// This method is called when your extension is deactivated
export function deactivate() { }
