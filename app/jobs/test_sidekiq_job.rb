class TestSidekiqJob < ApplicationJob
  require 'csv'

  def perform
    p 'ああああああああああああああああ'
    p 'いいいいいいいいいいいいいいいい'
    puts 'ああああああああああああああああ'
    puts 'いいいいいいいいいいいいいいいい'
  end
end
