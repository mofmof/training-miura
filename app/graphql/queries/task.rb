module Queries
  class Task < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Task, null: false

    def resolve(id:)
      ::Task.find(id)
    end
  end
end
