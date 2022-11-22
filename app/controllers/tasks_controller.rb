class TasksController < ApplicationController
  before_action :require_login
  def index; end

  def csv_export
    ExportTasksCsvJob.perform_later(current_user.id)
    redirect_to root_path
  end

  def csv_import
    current_user.update(csv_file: params[:file])
    ImportTasksCsvJob.perform_later(current_user.id) if current_user.csv_file.attached?
    redirect_to root_url
  end

  def test_sidekiq
    TestSidekiqJob.perform_later
  end
end
