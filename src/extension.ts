// Author: Jarod Rowland

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Starting up HTML-Validator!\n');
	createStatusBarItem(context);
	//statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	//statusBarItem.text = 'Validate';
	//statusBarItem.show();
	//context.subscriptions.push(statusBarItem);
}

function createStatusBarItem(context: vscode.ExtensionContext){
	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

	const onClickCmd = 'html-validator.statusBarClick';
	context.subscriptions.push(vscode.commands.registerCommand(onClickCmd, () => {
		vscode.window.showInformationMessage('Clicked!');
	}));
	statusBarItem.command = onClickCmd;

	statusBarItem.text = 'Validate';
	statusBarItem.tooltip = 'Validate HTML file';
	statusBarItem.show();
	context.subscriptions.push(statusBarItem);
	


	// The command has been defined in the package.json file
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('html-validator.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from HTML Validator!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
