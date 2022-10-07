100.times do |i|
  User.seed(name: "ユーザー#{i}", email: "user#{i}@example.com", password: "user#{i}", password_confirmation: "user#{i}")
end

100.times do |i|
  Task.seed(title: "タイトル#{i}", body: "ボディ#{i}", user_id: 1)
end
