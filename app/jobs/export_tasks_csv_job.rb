class ExportTasksCsvJob < ApplicationJob
  require 'csv'
  sidekiq_options retry: false

  def perform(user_id)
    user = User.find(user_id)
    tasks = user.tasks
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
    UserMailer.with(to: user.email, file: csv_data).send_csv.deliver_now
  end
end
