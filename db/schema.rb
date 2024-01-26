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

ActiveRecord::Schema[7.0].define(version: 2024_01_26_045714) do
  create_table "applies", charset: "utf8mb4", comment: "応募テーブル", force: :cascade do |t|
    t.integer "cat_id", null: false, comment: "猫ID"
    t.string "uid", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cat_id", "uid"], name: "index_applies_on_cat_id_and_uid", unique: true
  end

  create_table "cats", charset: "utf8mb4", comment: "猫テーブル", force: :cascade do |t|
    t.integer "cat_id", null: false, comment: "猫ID"
    t.string "name", null: false, comment: "名前"
    t.string "breed", null: false, comment: "猫種"
    t.string "image", null: false, comment: "写真"
    t.date "date_of_birth", comment: "生年月日"
    t.integer "sex", null: false, comment: "雌雄(1:オス or 2:メス)"
    t.integer "status", null: false, comment: "募集ステータス(1:募集中 or 2:お見合い中 or 3:里親決定)"
    t.string "uid", null: false, comment: "募集者"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", charset: "utf8mb4", comment: "プロフィールテーブル", force: :cascade do |t|
    t.string "zip_code", limit: 7, comment: "郵便番号"
    t.string "prefecture", comment: "都道府県"
    t.string "city", comment: "市区町村"
    t.string "block", comment: "番地"
    t.string "phone_number", comment: "電話番号"
    t.bigint "user_id", null: false, comment: "usersテーブルへの外部キー"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "sample_models", charset: "utf8mb4", comment: "サンプルモデルのテーブル", force: :cascade do |t|
    t.string "name", comment: "sample名"
    t.text "description", comment: "sample詳細説明"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", comment: "利用者テーブル", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false, comment: "パスワード"
    t.string "user_name", null: false, comment: "氏名"
    t.string "email", null: false, comment: "メールアドレス"
    t.integer "user_type", null: false, comment: "ユーザータイプ(1:募集者 or 2:応募者)"
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "profiles", "users"
end
