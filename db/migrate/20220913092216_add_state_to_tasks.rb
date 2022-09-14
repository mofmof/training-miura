class AddStateToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :state, :integer, null: false, default: 0
  end
end
