class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  before_action :set_csrf_token

  def not_authenticated
    redirect_to login_path
  end

  def set_csrf_token
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end
end
