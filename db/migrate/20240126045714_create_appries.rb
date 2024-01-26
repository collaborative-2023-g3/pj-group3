class CreateAppries < ActiveRecord::Migration[7.0]
  def change
    create_table :appries, comment: '応募テーブル' do |t|
      t.integer :cat_id, null: false, comment: '猫ID'
      t.string :uid, null: false, default: ""

      t.timestamps
    end
  end
end
