module Mutations
  class AddLabelToTask < LoginRequiredMutation
    argument :task_id, ID, required: true
    argument :label_id, ID, required: true

    field :task_label, ObjectTypes::TaskLabel, null: false

    def resolve(task_id:, label_id:)
      task = context[:current_user].tasks.find(task_id)
      label = context[:current_user].labels.find(label_id)
      task_label = TaskLabel.new(task_id:, label_id:)
      if task.user == label.user && task_label.save
        { task_label: }
      else
        raise GraphQL::ExecutionError, task_label.errors.full_messages.join("\n")
      end
    end
  end
end
