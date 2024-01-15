# 基本イメージとしてnginxのalpineバージョンを使用
FROM nginx:alpine

# 既存の設定ファイルを削除
RUN rm -f /etc/nginx/conf.d/*

# 設定ファイルのテンプレートをコンテナにコピー
ADD nginx.conf.template /etc/nginx/conf.d/myapp.conf.template

# コンテナ起動時に環境変数を使用して実際の設定ファイルを生成し、Nginxを起動
CMD envsubst '$SERVER_NAME' < /etc/nginx/conf.d/myapp.conf.template > /etc/nginx/conf.d/myapp.conf && nginx -g 'daemon off;'
