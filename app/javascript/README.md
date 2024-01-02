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

app/assets/builds配下のファイルは絶対に触らないでください

## ローカル開発時
- 開発している時は、以下のコマンドでフロントエンドのサーバーを動かしっぱなしに出来る。

Reactの場合
```
yarn run dev
```

Scssの場合
```
yarn run dev:css
```
※javascript配下にあるscssファイルは、yarn run dev:cssを実行し直さないと反映されないです。。。


ビルドする時は、
Reactの場合
```
yarn run dev
```

Scssの場合
```
yarn run build:css
```

## 設計思想
こいつの記事をとりあえず真似る
https://zenn.dev/overflow_offers/articles/20220523-component-design-best-practice

## mergeする前にやること
- yarn run buildでエラーを吐き出さないこと(React & Scss共に)
- yarn run buildをして想定通りの表示になっていることの確認