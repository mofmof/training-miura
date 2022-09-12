module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::Task], null: false

    def resolve
      context[:current_user].tasks.order(created_at: :desc)
    end
  end
end
