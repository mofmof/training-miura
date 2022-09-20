class TaskMailerPreview < ActionMailer::Preview
  def task_limit_approach
    # @hoge = 'メールだよ'
    # mail(to: params[:to], subject: 'メールタイトル')
    TaskMailer.with(to: 'shinji65536@gmail.com').task_limit_approach
    p 'hogehoge'
    puts 'ホゲホゲ'
  end
end
