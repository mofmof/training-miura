module Mutations
  class CreateTask < Mutations::BaseMutation
    argument :params, InputTypes::Task, required: true

    field :task, ObjectTypes::Task, null: false

    def resolve(params:)
      task = context[:current_user].tasks.create(params.to_h)
      { task: }
    end
  end
end
