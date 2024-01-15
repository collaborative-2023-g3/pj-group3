#!/bin/bash
set -e

rm -f /myapp/tmp/pids/server.pid

# DB作成
bundle exec rails db:create

# マイグレーション処理
bundle exec rails db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"