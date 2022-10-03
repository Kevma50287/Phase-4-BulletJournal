Rails.application.routes.draw do
  resources :shared_journals, only: [:create, :destroy]
  resources :journals
  resources :journal_entries, only: [:show, :create, :destroy, :update]

  #Create a user at 'users#create'
  resources :users, only: [:create]

  
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile' 
  patch '/edit', to:  'users#update'
  # post '/upload', to: 'journal_entries#create'
  # patch '/journal_entries/edit' to: 'journal_entries#update'
  # post '
  




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


end
