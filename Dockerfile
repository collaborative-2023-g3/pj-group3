# alpineで軽量化する
FROM ruby:3.2.2-alpine

# Dockerfile内で使う変数としてRUNTIME_PACKAGESとDEV_PACKAGESの２つを定義する
ARG RUNTIME_PACKAGES="bash imagemagick nodejs yarn tzdata mysql-dev mysql-client git"
ARG DEV_PACKAGES="build-base curl-dev"

# コンテナの作業用ディレクトリを設定する
WORKDIR /myapp

# 開発環境に関わる環境変数をdevelopmentに変更する(コンテナに渡すのでENVとする)
ENV RAILS_ENV="development"

# ローカルにあるGemfileとGemfile.lockをコンテナに複製する
COPY Gemfile Gemfile.lock /myapp/

# alpine特有のapkコマンドを使って、パッケージのインストールと削除
RUN apk update && \
    apk upgrade && \
    apk add --no-cache ${RUNTIME_PACKAGES} && \
    apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
    bundle install -j4 && \
    apk del build-dependencies

# ローカルのアプリコード一式をコンテナのmyappディレクトリに複製する
COPY . /myapp

# 静的アセットの配信を行う設定
ENV RAILS_SERVE_STATIC_FILES="true"

# entrypoint.production.shを複製してシェルスクリプトを実行する
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# コンテナはポート番号を3000で開放する
EXPOSE 3000