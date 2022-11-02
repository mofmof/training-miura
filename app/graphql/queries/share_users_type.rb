module Queries
  class ShareUsersType < Queries::LoginRequiredQuery
    argument :id, ID, required: true
    type [ObjectTypes::User], null: false

    def resolve(id:)
      task = Task.find(id)
      task.users
    end
  end
end
