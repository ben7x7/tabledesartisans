Rails.application.routes.draw do
  devise_for :users

  scope '(:locale)', locale: /fr|en/ do
    root to: 'pages#home'
    get 'cookies',          to: 'pages#cookies',            as: :cookies
    get 'mentions',         to: 'pages#mentions',           as: :mentions
    get 'confidentialite',  to: 'pages#confidentialite',    as: :confidentialite
  end
end
