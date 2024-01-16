# 基本イメージとしてnginxのalpineバージョンを使用
FROM nginx:alpine

# 既存の設定ファイルを削除
RUN rm -f /etc/nginx/conf.d/*

# 設定ファイルのテンプレートをコンテナにコピー
ADD nginx.conf /etc/nginx/conf.d/myapp.conf

# コンテナ起動時に環境変数を使用して実際の設定ファイルを生成し、Nginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf