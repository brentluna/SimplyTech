Rails.application.routes.draw do
  root to: 'static_pages#root'

  get 'api/feeds/search', :to => 'api/feeds#search', defaults: {format: :json}
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :feeds, only: [:index, :show]
    resources :categories, only: [:show, :index]
    resources :collections
    resources :collection_feeds, only: [:create, :destroy]
  end
end
