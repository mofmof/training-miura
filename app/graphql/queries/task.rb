module Queries
  class Task < Queries::BaseQuery
    argument :id, ID, required: true

    type ObjectTypes::Task, null: false

    def resolve(id:)
      login_required!
      context[:current_user].tasks.find(id)
    end
  end
end
