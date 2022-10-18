class Label < ApplicationRecord
  belongs_to :user
  has_many :task_labels, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
