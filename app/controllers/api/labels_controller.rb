module Api
  class LabelsController < ApplicationController
    before_action :require_login
    def index
      task = current_user.tasks.find(params[:task_id])
      @labels = task.labels
      render json: @labels, each_serializer: LabelSerializer
    end
  end
end
