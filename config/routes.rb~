Sk::Application.routes.draw do
root :to => "users#signin"


  get "dashboard/profile"

  get "static/aboutus"

  get "static/contactus"

  get "static/legal"

  get "static/friends"

  get "hme/index"

  get "hme/new"

  get "hme/show"

  get "hme/edit"

  get "hme/create"

  get "hme/update"

  get "hme/destroy"

  get "home/peer"

 match 'home/search' => 'home#search'

  get "registrations/paper"


  match 'home/feed' => 'home#feed'
  match 'home/feedback' => 'home#feedback'
match 'home/create' => 'home#create'
match 'home/editparent' => 'home#editparent'
match 'home/editedu' => 'home#editedu'
match 'home/editwork' => 'home#editwork'
match 'home/editparent1' => 'home#editparent1'
match 'home/profilepage' => 'home#profilepage'
match 'home/new' => 'home#new'
match 'home/edwork' => 'home#edwork'
match 'home/edup' => 'home#edup'
match 'home/viewwork' => 'home#viewwork'
match 'home/viewedu' => 'home#viewedu'
match 'home/destroy' => 'home#destroy'
match 'home/profile1' => 'home#profile1'
 # get "feedbacks/feedback"

  #match 'fb' => 'fb#fb'

devise_for :users do
  get '/users/sign_out' => 'devise/sessions#destroy'
  get 'home/search' => 'devise/home#search'
  
#get '/users/sign_out' => 'users#signin'
end

devise_for :users, :controllers => {:registrations => "registrations"}

   match '/msgin/:id'=> 'message#msgin'
  match "/msgout/:id"=> 'message#msgout'
 
   match '/inbox'=> 'message#inbox'
   match '/outbox'=> 'message#outbox'
   match '/write/:id'=> 'message#write'
   match '/message/sendmessage'=> 'message#sendmessage'

#match '/users/edit' => 'registrations#edit'


  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
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

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
