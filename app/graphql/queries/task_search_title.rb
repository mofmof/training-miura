module Queries
  class TaskSearchTitle < Queries::LoginRequiredQuery
    argument :title, String, required: true

    type [ObjectTypes::Task], null: false

    def resolve(title:)
      context[:current_user].tasks.find_title(title)
    end
  end
end
