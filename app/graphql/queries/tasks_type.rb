module Queries
  # class TasksType < Queries::LoginRequiredQuery
  class TasksType < Queries::BaseQuery
    argument :title, String, required: true
    argument :state, String, required: false
    type ObjectTypes::Task.connection_type, null: false

    def resolve(args)
      if args[:state].blank?
        context[:current_user].tasks.find_title(args[:title]).order(created_at: :desc)
      else
        context[:current_user].tasks.find_title(args[:title]).where(state: args[:state]).order(created_at: :desc)
      end
    end
  end
end
