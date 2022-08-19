class Task < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :body, length: { maximum: 65_535 }
end
