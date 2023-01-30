Rails.application.routes.draw do
  resources :visits
  resources :eateries
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing Logic: fallback requests for React Router
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

end
