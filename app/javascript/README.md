## このディレクトリは何？
React用のビルドファイル

## 使用技術
React: 18.2
TypeScript

## 初めてローカル環境でReact動かす時
- 環境構築
nodejsのv18.2.0を入れといてください
※Dockerはめんどくさいので構築しないです。
※これ以外のバージョンを入れるとバグるかもです。。

- node_modules周り
```
yarn install
```

## 仕組み
- yarn run buildで、app/javascript/application.jsに記載されているものが、app/assets/builds/application.jsに反映される仕組みです。

## ローカル開発時
- 開発している時は、以下のコマンドでフロントエンドのサーバーを動かしっぱなしに出来る。
```
yarn run dev
```

ビルドする時は、
```
yarn run build
```

## mergeする前にやること
- yarn run buildでエラーを吐き出さないこと
- yarn run buildをして想定通りの表示になっていることの確認