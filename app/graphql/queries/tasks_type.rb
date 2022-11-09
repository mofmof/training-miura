module Queries
  class TasksType < Queries::BaseQuery
    include Concern::LoginRequiredQuery

    argument :title, String, required: true
    argument :state, String, required: false
    type ObjectTypes::Task.connection_type, null: false

    def resolve(args)
      tasks = context[:current_user].tasks.find_title(args[:title]).order(created_at: :desc)
      tasks = tasks.where(state: args[:state]) if args[:state].present?
      tasks
    end
  end
end
