class Task < ApplicationRecord
  belongs_to :user
  has_many :task_labels, dependent: :destroy
  has_many :labels, through: :task_labels
  has_many :share_tasks, dependent: :destroy

  validates :title, presence: true, length: { maximum: 255 }
  validates :body, length: { maximum: 65_535 }

  enum state: { unstarted: 0, started: 10, finished: 20 }

  scope :limit_within_one_day, -> { where(limit_on: Time.zone.today..Time.zone.tomorrow) }
  scope :find_title, ->(title) { where('title LIKE ?', "%#{title}%") }
end
