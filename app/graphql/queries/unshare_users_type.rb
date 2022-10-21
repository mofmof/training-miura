module Queries
  class UnshareUsersType < Queries::LoginRequiredQuery
    argument :id, ID, required: true
    type [ObjectTypes::User], null: false

    def resolve(id:)
      task = Task.find(id)
      User.all - task.users
    end
  end
end
