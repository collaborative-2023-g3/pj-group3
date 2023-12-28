source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"
# gem 'react-rails'
# gem 'webpacker'

# 共通
gem "bootsnap", require: false
gem "importmap-rails"
gem "jbuilder"
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem "rails", "~> 7.0.8"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'rubocop', require: false # 追加
  gem 'rubocop-performance', require: false # 追加
  gem 'rubocop-rails', require: false # 追加
  gem 'rubocop-rspec' # 追加
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
