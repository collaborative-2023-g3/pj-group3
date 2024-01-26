class CreateApplies < ActiveRecord::Migration[7.0]
  def change
    create_table :applies, comment: '応募テーブル' do |t|
      t.integer :cat_id, null: false, comment: '猫ID'
      t.string :uid, null: false, default: ""

      t.timestamps
    end

    add_index :applies, [:cat_id, :uid], unique: true
  end
end
