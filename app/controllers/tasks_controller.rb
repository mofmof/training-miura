class TasksController < ApplicationController
  require 'csv'
  before_action :require_login
  def index; end

  def csv_export
    ExportTasksCsvJob.perform_later(current_user.id)
    redirect_to root_path
  end

  def csv_import
    current_user.update(csv_file: params[:file])
    tmp_file_path = Rails.root.join('tmp/csv_file.csv')
    file_content = current_user.csv_file.download
    File.binwrite(tmp_file_path, file_content)

    ActiveRecord::Base.transaction do
      CSV.foreach(tmp_file_path, headers: true) do |line|
        current_user.tasks.create(
          title: line[0],
          body: line[1],
          limit_on: line[2],
          state: line[3]
        )
      end
    end

    current_user.csv_file.purge
    redirect_to root_url
  end
end
