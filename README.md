## このリポジトリは何？
2023年コラボレイティブ開発特論のgroup5用のリポジトリ

## 使用技術
- バックエンド
  - Ruby on Rails :  
  - mysql : 5.7
  - ruby : 3.0.3
- フロントエンド
  - React : 予定
 
※ローカル環境での環境構築を容易にするため、本リポジトリではDockerを使う。Dockerを使いたくない人は各自ローカルにてよしなに対応してください。

## ローカル環境構築での注意点

- rails ~~ コマンドを実施するときは、docker-compose run web ~~~ という形で実施してください

(例)
```
docker-compose run web rails db:create
```


## 環境構築
### 前提
Dockerを導入済みであること。

https://www.docker.com/ja-jp/

以下を参考にDocker Desktopを導入してくださいませ。

https://www.kagoya.jp/howto/cloud/container/dockerdesktop/

### ローカルでの環境構築① : Rails環境の構築
1. リポジトリのclone

```
git clone git@github.com:collaborative-2023-g3/pj-group3.git
```

※SSHでcloneしてください

2. docker imageの作成

```
docker compose build
```

3. dockerコンテナの起動

```
docker-compose up
```

※コンテナをバックグラウンドとして起動したい場合は以下コマンドを実行

```
docker-compose up -d
```

4. localhost:3000に移動して、dbがないぞというエラーが出ていることを確認

5. ターミナルにて別タブを開いて、以下コマンドを実施
```
docker-compose run web rails db:create
```

6. localhost:3000でアクセスして以下のようなロゴが出ていれば環境構築成功

![スクリーンショット 2023-12-18 20 42 22](https://github.com/collaborative-2023-g3/pj-group3/assets/71912259/fa81555f-0192-47fb-8cbe-73300ec911c9)


### ローカルでの環境構築② : Rails環境の構築
### 前提
macユーザー : Sequel Aceを導入済であること

https://sequel-ace.com/

windowsユーザー ; よしなにお選びください

### ローカルでの確認
以下のようなイメージで情報を記載。passwordのところには、「password」と入力

![スクリーンショット 2023-12-18 20 44 58](https://github.com/collaborative-2023-g3/pj-group3/assets/71912259/5aabe8ab-be55-4109-8c52-3a1495dfd2fa)






