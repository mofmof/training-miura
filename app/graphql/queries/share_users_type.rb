module Queries
  class ShareUsersType < Queries::LoginRequiredQuery
    type [ObjectTypes::User], null: false

    def resolve
      User.all.order(created_at: :desc)
    end
  end
end
