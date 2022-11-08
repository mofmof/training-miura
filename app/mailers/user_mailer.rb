class UserMailer < ApplicationMailer
  def task_limit_approach
    @user = User.find_by(email: params[:to])
    @tasks = @user.tasks.limit_within_one_day
    limit_within_one_day_count = @user.tasks.limit_within_one_day.count
    subject = "期限が迫っているタスクが#{limit_within_one_day_count}件あります"
    mail(to: params[:to], subject:)
  end

  def send_csv
    @user = User.find_by(email: params[:to])
    attachments['タスク一覧.csv'] = params[:file]
    subject = 'タスク一覧'
    mail(to: params[:to], subject:)
  end

  def receive_csv
    @user = User.find_by(email: params[:to])
    subject = 'タスクインポート完了通知'
    mail(to: params[:to], subject:)
  end
end
