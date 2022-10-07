module Queries
  class TasksType < Queries::LoginRequiredQuery
    argument :title, String, required: true
    type ObjectTypes::Task.connection_type, null: false

    def resolve(title:)
      context[:current_user].tasks.find_title(title).order(created_at: :desc)
    end
  end
end
