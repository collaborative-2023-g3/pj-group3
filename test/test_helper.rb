ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...

  # 以下を追加
  Dir[Rails.root.join("app/models/test/**/*.rb")].each { |f| require f }
  Dir[Rails.root.join("app/controllers/test/**/*.rb")].each { |f| require f }
end
