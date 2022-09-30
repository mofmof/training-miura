module Queries
  class Users < Queries::AdminRequiredQuery
    type [ObjectTypes::User], null: false

    def resolve
      User.all.order(created_at: :desc)
    end
  end
end
