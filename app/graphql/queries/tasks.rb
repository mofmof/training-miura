module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::Task], null: false

    def resolve
      # ::Task.all.order(created_at: :desc)
      context[:current_user].tasks.order(created_at: :desc)
    end
  end
end
