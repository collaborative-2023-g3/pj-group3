class ImageUploader < CarrierWave::Uploader::Base
  # ...

  # 環境に基づいてストレージを設定
  if Rails.env.production?
    storage :fog
  else
    storage :file
  end

  # ...

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_allowlist
    %w[jpg jpeg png]
  end

  def filename
    "#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
  end
end
