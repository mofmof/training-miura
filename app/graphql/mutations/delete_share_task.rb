module Mutations
  class DeleteShareTask < LoginRequiredMutation
    argument :user_id, ID, required: true
    argument :task_id, ID, required: true

    field :user_id, ID, null: false
    field :task_id, ID, null: false

    def resolve(user_id:, task_id:)
      ShareTask.find_by(user_id:, task_id:).destroy!
      { user_id:, task_id: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
