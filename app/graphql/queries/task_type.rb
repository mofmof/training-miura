module Queries
  class TaskType < Queries::BaseQuery
    include Concern::LoginRequiredQuery

    argument :id, ID, required: true

    type ObjectTypes::Task, null: false

    def resolve(id:)
      share_tasks = Task.joins(:share_tasks).includes(:share_tasks).where(share_tasks: { user_id: context[:current_user].id })
      tasks = context[:current_user].tasks << share_tasks
      tasks.find(id)
    end
  end
end
