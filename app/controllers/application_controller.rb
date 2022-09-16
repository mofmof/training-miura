class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  before_action :set_csrf_token

  def not_authenticated
    redirect_to login_path
  end

  def domain(rails_env)
    if rails_env == 'development'
      return 'localhost'
    elsif rails_env == 'production'
      return 'https://traning-miura.herokuapp.com/'
    end
  end

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: domain(ENV['RAILS_ENV']),
      value: form_authenticity_token
    }
  end
end
