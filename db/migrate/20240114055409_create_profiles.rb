# devise-token-authにて作成するprofileモデルのマイグレーションファイル
class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      # t.bigint :uid, null: false
      t.string :zip_code, limit: 7
      t.string :prefecture
      t.string :city
      t.string :block
      t.string :phone_number
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
    # add_index :profiles, :uid, unique: true
  end
end
