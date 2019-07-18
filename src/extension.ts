'use strict';
import * as vscode from 'vscode';
import * as sqlops from 'sqlops';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.showCurrentConnection', () => {
        sqlops.connection.getCurrentConnection().then(connection => {
            if (connection) {
                sqlops.connection.getConnectionString(connection.connectionId, true).then(connectionString => {
                    vscode.window.showInformationMessage('Database from connection: ' + connection.options.database);
                    vscode.window.showInformationMessage('Connection string: ' + connectionString);
                })
            } else {
                vscode.window.showInformationMessage('No connection');
            }
        }, error => {
             console.info(error);
        });
    }));
}