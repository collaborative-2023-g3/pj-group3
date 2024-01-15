#!/bin/bash
set -e

rm -f /myapp/tmp/pids/server.pid

# DB作成 && マイグレーション処理(ここ実行するとmysqlの起動間に合わずこける)
# bundle exec rails db:create
# bundle exec rails db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"