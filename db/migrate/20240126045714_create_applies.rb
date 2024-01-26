class CreateApplies < ActiveRecord::Migration[7.0]
  # applyモデルのマイグレーションファイル
  def change
    create_table :applies, comment: '猫応募状況テーブル' do |t|
      t.integer :cat_id, null: false, comment: '猫ID'
      t.string :uid, null: false, default: ""

      t.timestamps
    end

    add_index :applies, %w[:cat_id, :uid], unique: true
  end
end
