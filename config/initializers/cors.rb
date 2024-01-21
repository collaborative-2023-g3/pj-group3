Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost', 'http://localhost:3000', 'http://pj5-nlb-271ff4e51a6114d9.elb.ap-northeast-1.amazonaws.com'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :delete, :options, :head],
      credentials: true
  end
end