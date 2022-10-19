module Mutations
  class RemoveLabelFromTask < LoginRequiredMutation
    argument :task_id, ID, required: true
    argument :label_id, ID, required: true

    field :task_label, ObjectTypes::TaskLabel, null: false

    def resolve(task_id:, label_id:)
      task = context[:current_user].tasks.find(task_id)
      label = context[:current_user].labels.find(label_id)
      task_label = TaskLabel.find_by(task_id: task.id, label_id: label.id)
      task_label.destroy!
      { task_label: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
