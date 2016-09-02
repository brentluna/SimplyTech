Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :feeds, only: [:index, :show]
    resources :categories, only: [:show, :index]
    resources :collections
  end
end
