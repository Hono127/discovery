Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  # 下記の記述はhttp://127.0.0.1:3000/posts/となる
  resources :posts, only: [:index, :new, :create, :edit, :destroy, :update, ]
end
