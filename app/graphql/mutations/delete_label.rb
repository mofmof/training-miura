module Mutations
  class DeleteLabel < LoginRequiredMutation
    argument :id, ID, required: true

    field :id, ID, null: false

    def resolve(id:)
      context[:current_user].labels.find(id).destroy!

      { id: }
    rescue StandardError => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
