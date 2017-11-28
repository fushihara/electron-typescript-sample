# link

フォーク元の https://github.com/sourcechord/electron-typescript-sample のreadmeは[こちら](https://github.com/fushihara/electron-typescript-sample/blob/master/README-original.md)

# about

VisualStudioCodeでTypeScriptを使ってElectronのコードをデバッグ出来るプロジェクト構成のサンプルです

オリジナルのフォーク元よりVisualStudioCode1.17.2の対応の変更が入っています。

.vscode/tasks.jsonファイルのバージョンを1から2に変更しています。

electronのメインプロセス、レンダリングプロセスの中でクラスを使うテストコードが追加されています

# 使い方

`$ npm install` → vsCodeで開く → デバッグ出来る

vsCodeを開いた状態でnpm installするとtypingsが反映されません。その際はvsCodeを再起動して下さい。