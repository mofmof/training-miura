require File.expand_path(File.dirname(__FILE__) + "/environment")

rails_env = ENV['RAILS_ENV'] || :development

set :environment, rails_env
set :output, "log/cron.log"
ENV.each { |k, v| env(k, v) }

  # clear cache
every 1.minutes do
  rake 'task_limit:task_limit_approach'
end
