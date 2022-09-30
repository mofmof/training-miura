class ExportTasksCsvJob < ApplicationJob
  require 'csv'

  def perform(user_id)
    user = User.find_by(id: user_id)
    return false if user.blank?

    tasks = user.tasks
    csv_data = CSV.generate do |csv|
      column_names = %w[ID タイトル 本文 期限 ステータス]
      csv << column_names
      tasks.find_each do |task|
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
