source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

# 開発環境〜本番環境
gem "bootsnap", require: false
gem 'devise'
gem 'devise-i18n'
gem "devise_token_auth"
gem 'dotenv'
gem "importmap-rails"
gem "jbuilder"
gem 'jsbundling-rails' # for React
gem 'jwt'
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem 'rack-cors', require: 'rack/cors'
gem "rails", "~> 7.0.8"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# 開発環境/テストのみ
group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

# 開発環境のみ
group :development do
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec'
  gem "web-console"
end

# テストのみ
group :test do
  gem "capybara"
  gem "selenium-webdriver"
end

gem "cssbundling-rails", "~> 1.3"
