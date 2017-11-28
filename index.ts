import * as electron from 'electron'; 
import {remote} from 'electron'; 
import {Memo} from "./memo";

const app = remote.app;
const BrowserWindow = remote.BrowserWindow;
const dialog = remote.dialog;
let p : Memo = new Memo("こちらレンダリング プロセス");

function hello(){
	var options: Electron.MessageBoxOptions = {
		title: 'ダイアログのタイトル',
		type: 'info',
		buttons: ['OK', 'Cancel'],
		message: `メッセージ[${p.getMessage()}]です`,
		detail: 'hello'
	};
	var win = BrowserWindow.getFocusedWindow();
	dialog.showMessageBox(win, options);
}

document.getElementById('btnShowHello').onclick = hello;
