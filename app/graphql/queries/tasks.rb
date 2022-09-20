module Queries
  class Tasks < Queries::BaseQuery
    type [ObjectTypes::Task], null: false

    def resolve
<<<<<<< HEAD
      context[:current_user].tasks.order(limit_at: :desc)
=======
      login_required!
      context[:current_user].tasks.order(created_at: :desc)
>>>>>>> 98bff2b84c98e68ba5ccc8474a7ec99097da7d88
    end
  end
end
