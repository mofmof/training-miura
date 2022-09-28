class TasksController < ApplicationController
  before_action :require_login
  def index; end

  def csv_export
    ExportTasksCsvJob.perform_later(current_user.id)
    redirect_to root_path
  end
end
