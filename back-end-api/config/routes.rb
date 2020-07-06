Rails.application.routes.draw do
  scope '/api' do
    get :users, to: 'users#index'
    post :users, to: 'users#create'
    post :sessions, to: 'sessions#create'
  end
end