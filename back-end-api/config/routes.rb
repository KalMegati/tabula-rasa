Rails.application.routes.draw do
  scope '/api' do
    get :users, to: 'users#index'
  end
end