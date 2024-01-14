# frozen_string_literal: true

# devise-token-authにて作成するuserモデル
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_one :user_profiles, dependent: :destroy, primary_key: :uid, foreign_key: :uid
end
