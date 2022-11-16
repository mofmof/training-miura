Rails.application.routes.draw do
  if Rails.env.development?
    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
  end
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql#execute' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'

  root to: 'tasks#index'

  get 'tasks/:id', to: 'tasks#index'
  get 'tasks/:id/edit', to: 'tasks#index'
  get 'tasks/:id/users', to: 'tasks#index'
  get 'sharetasks', to: 'tasks#index'
  get 'labels', to: 'tasks#index'
  get 'csv_export', to: 'tasks#csv_export'
  post 'csv_import', to: 'tasks#csv_import'

  get 'users', to: 'tasks#index'

  get 'signup', to: 'users#new'
  get 'login', to: 'user_sessions#new', as: :login
  post 'login', to: 'user_sessions#create'
  get 'logout', to: 'tasks#index'
  delete 'logout' => 'user_sessions#destroy'

  # REST API学習用ルーティング
  namespace :api do
    resources :tasks, only: %i[index] do
      resources :labels, only: %i[index]
    end
  end
  get 'frontend/tasks', to: 'tasks#index'
end
