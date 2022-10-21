module Mutations
  class CreateShareTask < LoginRequiredMutation
    argument :user_id, ID, required: true
    argument :task_id, ID, required: true

    field :user_id, ID, null: false
    field :task_id, ID, null: false

    def resolve(user_id:, task_id:)
      task_user_id = Task.find(task_id).user_id
      share_task = ShareTask.new(user_id:, task_id:) if task_user_id != user
      if share_task.save
        { user_id:, task_id: }
      else
        raise GraphQL::ExecutionError, share_task.errors.full_messages.join("\n")
      end
    end
  end
end
