CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: Rails.application.credentials.aws[:ACCESS_KEY_ID],
      aws_secret_access_key: Rails.application.credentials.aws[:SECRET_ACCESS_KEY],
      region: 'ap-northeast-1'
    }
    config.fog_directory  = 'ここはアプリごとに異なる'
    config.asset_host = "http://pj-5bucket.s3.ap-northeast-1.amazonaws.com/"
  else
    config.asset_host = "http://localhost:3000"
    config.storage = :file
    config.cache_storage = :file
  end
end