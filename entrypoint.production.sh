#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# 本番環境（AWS ECS）への初回デプロイ時に利用
# TODO : 初回デプロイ後にコメントアウトする
bundle exec rails db:create
# --------------------------------------
# マイグレーション処理
bundle exec rails db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"