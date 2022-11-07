class TasksController < ApplicationController
  before_action :require_login
  def index; end

  def csv_export
    ExportTasksCsvJob.perform_later(current_user.id)
    redirect_to root_path
  end

  def csv_import
    current_user.tasks.import(params[:file])
    redirect_to root_url
  end
end
