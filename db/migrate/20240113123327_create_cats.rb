# catモデルのマイグレーションファイル
class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats, comment: '猫テーブル' do |t|
      t.integer :cat_id, null: false, comment: '猫ID'
      t.string :name, null: false, comment: '名前'
      t.string :breed, null: false, comment: '猫種'
      t.string :image, null: false, comment: '写真'
      t.date :date_of_birth, comment: '生年月日'
      t.integer :sex, null: false, comment: '雌雄(1:オス or 2:メス)'
      t.integer :status, null: false, comment: '募集ステータス(1:募集中 or 2:お見合い中 or 3:里親決定)'
      t.string :uid, null: false, comment: '募集者'

      t.timestamps
    end
  end
end
