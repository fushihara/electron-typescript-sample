import {Memo} from "./memo";
import * as electron from 'electron';
import {app, BrowserWindow} from 'electron';

// メインウィンドウの参照をグローバルに持っておく。
let mainWindow: Electron.BrowserWindow = null;
let p : Memo = new Memo("こちらメインプロセス");
console.log(`メモ＝${p.getMessage()}`);

// すべてのウィンドウが閉じられた際の動作
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  // 新規ウィンドウ作成
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // index.htmlを開く
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたら、ウィンドウへの参照を破棄する。
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
