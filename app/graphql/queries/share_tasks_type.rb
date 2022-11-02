module Queries
  class ShareTasksType < Queries::LoginRequiredQuery
    include Concern::LoginRequiredQuery
    argument :params, InputTypes::ShareTask, required: true
    type ObjectTypes::Task.connection_type, null: false

    def resolve(params:)
      tasks = Task.joins(:share_tasks).where(share_tasks: { user_id: context[:current_user].id })
      tasks = tasks.find_title(params.title).order(created_at: :desc)
      tasks = tasks.where(state: params.state) if params.state.present?
      tasks
    end
  end
end
