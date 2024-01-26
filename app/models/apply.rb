class Apply < ApplicationRecord
    validates :cat_id, uniqueness: { scope: :uid }
end
