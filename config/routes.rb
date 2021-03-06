Rails.application.routes.draw do

  root to: "static_pages#home"
  # get '/home', to: "static_pages#home"

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:create, :destroy, :show, :index, :update]
    resources :reviews, only: [:create, :destroy, :show, :index, :update]
    resources :notes, only: [:create, :destroy, :show, :index, :update]
    resource :user, only: [ :destroy, :show, :update, :create] do
      resources :reviews, only: [:index]
    end
    resource :session, only: [:show, :create, :destroy]
    resources :analyses, only: [:show, :index, :create, :update, :destroy]
  end
  # get '*path', to: "static_pages#home"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end


end
