module Api
  class TasksController < ApplicationController
    before_action :require_login
    def index
      @tasks = current_user.tasks.order(created_at: :desc)
      render json: @tasks, each_serializer: TaskSerializer
    end
  end
end
