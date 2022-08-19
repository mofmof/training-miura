json = ActiveSupport::JSON.decode(File.read('db/seeds/tasks.json'))
json.each do |record|
  Task.create!(record)
end
