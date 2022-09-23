class Task < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :body, length: { maximum: 65_535 }

  belongs_to :user

  enum state: { unstarted: 0, started: 10, finished: 20 }

  scope :limit_within_one_day, -> { where(limit_on: Time.zone.today..Time.zone.tomorrow) }
end
