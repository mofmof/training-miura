module Mutations
  class CreateLabel < LoginRequiredMutation
    argument :name, String, required: true

    field :label, ObjectTypes::Label, null: false

    def resolve(name:)
      label = context[:current_user].labels.new(name:)
      { label: } if label.save
      raise GraphQL::ExecutionError, label.errors.full_messages.join("\n") unless label.save
    end
  end
end
