class Task < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user
  has_many :task_labels, dependent: :destroy
  has_many :labels, through: :task_labels
  has_many :share_tasks, dependent: :destroy
  has_many :users, through: :share_tasks
  has_one_attached :image

  validates :title, presence: true, length: { maximum: 255 }
  validates :body, length: { maximum: 65_535 }

  enum state: { unstarted: 0, started: 10, finished: 20 }

  scope :limit_within_one_day, -> { where(limit_on: Time.zone.today..Time.zone.tomorrow) }
  scope :find_title, ->(title) { where('title LIKE ?', "%#{title}%") }

  def image_url
    rails_blob_path(image, disposition: 'attachment', host: 'localhost:3000') if image.attached?
  end
end
