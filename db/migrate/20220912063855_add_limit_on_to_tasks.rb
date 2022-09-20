class AddLimitOnToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :limit_on, :date
  end
end
