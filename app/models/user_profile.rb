# devise-token-authにて作成するuser_profileモデル
class UserProfile < ApplicationRecord
  belongs_to :user, primary_key: :uid, foreign_key: :uid
end
