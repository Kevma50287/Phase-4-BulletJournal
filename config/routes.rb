Rails.application.routes.draw do
  resources :journal_activity_joiners
  resources :activities
  resources :journal_entries
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
