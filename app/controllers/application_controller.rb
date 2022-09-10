class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  before_action :set_csrf_token

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: 'localhost',
      value: form_authenticity_token
    }
  end
end
