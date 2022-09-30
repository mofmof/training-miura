module Queries
  class TaskType < Queries::LoginRequiredQuery
    argument :id, ID, required: true

    type ObjectTypes::Task, null: false

    def resolve(id:)
      context[:current_user].tasks.find(id)
    end
  end
end
