Rails.application.routes.draw do
  resources :follows
  resources :shared_journals, only: [:create, :destroy]
  resources :journals do
    resources :journal_entries
  end
  

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
