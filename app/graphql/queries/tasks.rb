module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::Task], null: false

    def resolve
      context[:current_user].tasks.order(limit_at: :desc)
    end
  end
end
