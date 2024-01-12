Rails.application.routes.draw do
  namespace :v1 do
    mount_devise_token_auth_for "User", at: "auth", controllers: {
      registrations: "v1/auth/registrations",
  }
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "top#index"
  get '*path', to: 'top#index', format: false # これがないとRailsがフロントエンド側のルーティングを認識できないため、任意のパスは全てリダイレクトする
end
