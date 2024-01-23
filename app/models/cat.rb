# Catモデル
class Cat < ApplicationRecord
  mount_uploader :image, ImageUploader
end
