class TaskMailer < ApplicationMailer
  def task_limit_approach
    @hoge = 'メールだよ'
    mail(to: params[:to], subject: 'メールタイトル')
    p 'hogehoge'
    puts 'ホゲホゲ'
  end
end
