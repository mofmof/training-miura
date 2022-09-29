class UserMailer < ApplicationMailer
  def task_limit_approach
    @user = User.find_by(email: params[:to])
    @tasks = @user.tasks.limit_within_one_day
    limit_within_one_day_count = @user.tasks.limit_within_one_day.count
    subject = "期限が迫っているタスクが#{limit_within_one_day_count}件あります"
    mail(to: params[:to], subject:)
  end
end
