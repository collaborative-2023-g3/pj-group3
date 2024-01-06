# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_03_025354) do
  create_table "sample_models", charset: "utf8mb4", comment: "サンプルモデルのテーブル", force: :cascade do |t|
    t.string "name", comment: "sample名"
    t.text "description", comment: "sample詳細説明"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", comment: "利用者テーブル", force: :cascade do |t|
    t.string "encrypted_password", default: "", null: false, comment: "パスワード"
    t.string "user_name", null: false, comment: "氏名"
    t.string "email", null: false, comment: "メールアドレス"
    t.integer "user_type", null: false, comment: "ユーザータイプ(1:募集者 or 2:応募者)"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
