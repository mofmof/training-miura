class UserSessionsController < ApplicationController
  def new; end

  def create
    user = login(params[:email], params[:password])
    render json: {
      session: true,
      user:
    }, status: :ok
  end

  def destroy
    logout
  end
end
