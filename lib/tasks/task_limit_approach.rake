namespace :task_limit do
  desc '期限が迫っているタスクを知らせる'
  task task_limit_approach: :environment do
    users = User.all
    users.each do |user|
      next if user.tasks.limit_within_one_day.blank?

      UserMailer.with(to: user.email).task_limit_approach.deliver_now
    end
  end
end
