100.times do |i|
  User.create!(name: "ユーザー#{i}", email: "user#{i}@example.com", password: "user#{i}", password_confirmation: "user#{i}")
end
