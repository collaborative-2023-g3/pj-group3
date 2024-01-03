Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :samples
  root 'samples#index'
  get '*path', to: 'samples#index', format: false # これがないとRailsがフロントエンド側のルーティングを認識できないため、任意のパスは全てリダイレクトする
end
