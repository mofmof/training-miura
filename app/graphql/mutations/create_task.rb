module Mutations
  class CreateTask < LoginRequiredMutation
    argument :params, InputTypes::Task, required: true

    field :task, ObjectTypes::Task, null: false

    def resolve(params:)
      task = context[:current_user].tasks.new(params.to_h)
      if task.save
        { task: }
      else
        raise GraphQL::ExecutionError, task.errors.full_messages.join("\n")
      end
    end
  end
end
