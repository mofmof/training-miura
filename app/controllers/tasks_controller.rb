class TasksController < ApplicationController
  require 'csv'
  before_action :require_login
  def index; end

  def csv_export
    tasks = current_user.tasks
    csv_data = CSV.generate do |csv|
      column_names = %w[ID タイトル 本文 期限 ステータス]
      csv << column_names
      tasks.each do |task|
        column_values = [
          task.id,
          task.title,
          task.body,
          task.limit_on,
          task.state
        ]
        csv << column_values
      end
    end
    UserMailer.with(to: current_user.email, file: csv_data).send_csv.deliver_now
    redirect_to root_path
  end
end
