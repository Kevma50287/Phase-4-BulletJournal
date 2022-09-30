Rails.application.routes.draw do
  resources :journal_activity_joiners
  resources :activities
  resources :journal_entries
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile' 
  patch '/edit', to:  'users#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
