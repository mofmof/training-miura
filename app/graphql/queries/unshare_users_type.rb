module Queries
  class UnshareUsersType < Queries::LoginRequiredQuery
    argument :id, ID, required: true
    type [ObjectTypes::User], null: false

    def resolve(id:)
      task = Task.find(id)
      User.where.not(id: task.user_id) - task.users
    end
  end
end
