Rails.application.routes.draw do
  resources :journal_activity_joiners
  resources :activities
  resources :journal_entries

  #Create a user at 'users#create'
  resources :users, only: [:create]

  
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'

end
