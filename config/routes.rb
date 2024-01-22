Rails.application.routes.draw do
  # apiルーティング---------------------------------
  namespace :api do
    namespace :v1 do
      # devise用ルーティング
      # prefix :http://localhost:3000/api/v1/auth/***
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sign_in: "api/v1/auth/sign_in"
      }

      # devise以外のルーティング
      # prefix :http://localhost:3000/api/v1/**
    end
  end

  # webルーティング(for React)---------------------------------
  # prefix :http://localhost:3000/***
  root "top#index"
  # これがないとRailsがフロントエンド側のルーティングを認識できないため、任意のパスは全てリダイレクトする
  get '*path', to: 'top#index', format: false
end
