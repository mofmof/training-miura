module Queries
  class ShareTasksType < Queries::LoginRequiredQuery
    argument :title, String, required: true
    argument :state, String, required: false
    type ObjectTypes::Task.connection_type, null: false

    def resolve(args)
      task_all = Task.joins(:share_tasks).includes(:share_tasks).where(share_tasks: { user_id: context[:current_user].id })
      tasks = task_all.find_title(args[:title]).order(created_at: :desc)
      tasks = tasks.where(state: args[:state]) if args[:state].present?
      tasks
    end
  end
end
