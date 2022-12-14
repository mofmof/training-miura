class User < ApplicationRecord
  authenticates_with_sorcery!

  has_many :tasks, dependent: :destroy
  has_many :labels, dependent: :destroy
  has_many :share_tasks, dependent: :destroy
  has_one_attached :csv_file

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :role, presence: true
  validates :password, length: { minimum: 3 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }

  enum role: { general: 0, admin: 10 }
end
