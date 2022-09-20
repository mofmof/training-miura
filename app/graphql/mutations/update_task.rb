module Mutations
  class UpdateTask < LoginRequiredMutation
    argument :id, ID, required: true
    argument :params, InputTypes::Task, required: true

    field :task, ObjectTypes::Task, null: false

    def resolve(id:, params:)
      task = context[:current_user].tasks.find(id)
      if task.update(params.to_h)
        { task: }
      else
        raise GraphQL::ExecutionError, task.errors.full_messages.join("\n")
      end
    end
  end
end
