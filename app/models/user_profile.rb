# devise-token-authにて作成するuser_profileモデル
class UserProfile < ApplicationRecord
  belongs_to :user
end
