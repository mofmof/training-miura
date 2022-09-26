module Queries
  class Users < Queries::BaseQuery
    type [ObjectTypes::User], null: false

    def resolve
      admin!
      User.all.order(created_at: :desc)
    end
  end
end
