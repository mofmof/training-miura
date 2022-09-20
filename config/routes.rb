Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql#execute' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'

  root to: 'tasks#index'

  get 'tasks/:id', to: 'tasks#index'
  get 'tasks/:id/edit', to: 'tasks#index'

  get 'signup', to: 'users#new'
  get 'login', to: 'user_sessions#new', as: :login
  post 'login', to: 'user_sessions#create'
  get 'logout', to: 'tasks#index'
  delete 'logout' => 'user_sessions#destroy'
end
