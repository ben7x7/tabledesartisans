Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'cookies',          to: 'pages#cookies',            as: :cookies
  get 'mentions',         to: 'pages#mentions',           as: :mentions
  get 'confidentialite',  to: 'pages#confidentialite',    as: :confidentialite
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
