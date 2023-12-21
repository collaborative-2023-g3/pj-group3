# sample用
class CreateSampleModels < ActiveRecord::Migration[7.0]
  def change
    create_table :sample_models, comment: 'サンプルモデルのテーブル' do |t|
      t.string :name, comment: 'sample名'

      t.text :description, comment: 'sample詳細説明'

      t.timestamps
    end
  end
end
