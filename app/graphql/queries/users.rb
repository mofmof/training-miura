module Queries
  class Users < Queries::BaseQuery
    include Concern::AdminRequiredQuery

    type [ObjectTypes::User], null: false

    def resolve
      User.all.order(created_at: :desc)
    end
  end
end
