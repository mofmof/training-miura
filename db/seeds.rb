100.times do |i|
  User.create(name: "ユーザー#{i}", email: "user#{i}@example.com", password: "user#{i}", password_confirmation: "user#{i}")
end

100.times do |i|
  Task.create(title: "タイトル#{i}", body: "ボディ#{i}", user_id: 1)
end
