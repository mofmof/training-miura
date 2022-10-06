100.times do |i|
  Task.create!(title: "タイトル#{i}", body: "ボディ#{i}", user_id: 1)
end
