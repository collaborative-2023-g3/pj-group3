# devise-token-authにて作成するprofileモデルのマイグレーションファイル
class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table(:profiles, comment: 'プロフィールテーブル') do |t|
      t.string :zip_code, limit: 7, comment: '郵便番号'
      t.string :prefecture, comment: '都道府県'
      t.string :city, comment: '市区町村'
      t.string :block, comment: '番地'
      t.string :phone_number, comment: '電話番号'
      t.references :user, null: false, foreign_key: true, comment: 'usersテーブルへの外部キー'
      t.timestamps
    end
  end
end
