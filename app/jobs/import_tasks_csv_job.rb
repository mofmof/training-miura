class ImportTasksCsvJob < ApplicationJob
  require 'csv'
  def perform(user_id)
    user = User.find(user_id)
    return false if user.blank?

    tmp_file_path = Rails.root.join('tmp/csv_file.csv')
    file_content = user.csv_file.download
    File.binwrite(tmp_file_path, file_content)

    ActiveRecord::Base.transaction do
      CSV.foreach(tmp_file_path, headers: true) do |line|
        user.tasks.create(
          title: line[0],
          body: line[1],
          limit_on: line[2],
          state: line[3]
        )
      end
      user.csv_file.purge
    end
    UserMailer.with(to: user.email).csv_import_complete.deliver_now
  end
end
