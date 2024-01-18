# frozen_string_literal: true

# devise-token-authにて作成するuserモデル
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_one :profile, dependent: :destroy # , primary_key: :uid, foreign_key: :uid
  # アソシエーション設定 Userモデルと同時にuser_profileモデルのデータを作りたいので設定。
  accepts_nested_attributes_for :profile
end
