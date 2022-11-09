module Queries
  class UnaddedTaskLabelsType < Queries::BaseQuery
    include Concern::LoginRequiredQuery

    argument :id, ID, required: true
    type [ObjectTypes::Label], null: false

    def resolve(id:)
      task = context[:current_user].tasks.find(id)
      label_all = context[:current_user].labels.order(created_at: :desc)
      label_all - task.labels
    end
  end
end
