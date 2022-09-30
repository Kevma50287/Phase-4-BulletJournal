Rails.application.routes.draw do
  resources :journal_activity_joiners
  resources :activities
  resources :journal_entries

  #Create a user at 'users#create'
  resources :users, only: [:create]

  
  post '/login', to: 'auth#create'
<<<<<<< HEAD
  get '/profile', to: 'users#profile' 
  patch '/edit', to:  'users#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
=======
  get '/profile', to: 'users#profile'
>>>>>>> backend

end
