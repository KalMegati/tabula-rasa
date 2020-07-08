Rails.application.routes.draw do
  scope '/api' do
    get :users, to: 'users#index'
    post :users, to: 'users#create'
    patch '/users/:id', to: 'users#update'
    post :sessions, to: 'sessions#create'

    get :characters, to: 'characters#index'
    post :characters, to: 'characters#create'

    post :elements, to: 'elements#create'

  end
end