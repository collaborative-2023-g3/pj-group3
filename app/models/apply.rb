class Apply < ApplicationRecord
    # 猫応募状況テーブル
    validates :cat_id, uniqueness: { scope: :uid }
end
