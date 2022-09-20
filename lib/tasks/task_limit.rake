namespace :task_limit do
  desc '公開待ちの中で、公開日時が過去になっているものがあれば、ステータスを「公開」に変更されるようにする'
  task task_limit_approach: :environment do
    # Article.publish_wait.past_published.find_each(&:published!)
    TaskMailer.with(to: 'shinji65536@gmail.com').task_limit_approach.deliver_now
    p 'hogehoge'
    puts "hogehoge"
  end
  # task mail_article_summary: :environment do
  #   ArticleMailer.report_summary.deliver_now
  # end
end
