source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"
# gem 'react-rails'
# gem 'webpacker'

# 共通
gem "rails", "~> 7.0.8"
gem "sprockets-rails"
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false


group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console"
  gem 'rubocop', require: false # 追加
  gem 'rubocop-performance', require: false # 追加
  gem 'rubocop-rails', require: false # 追加
  gem 'rubocop-rspec' # 追加
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
end
