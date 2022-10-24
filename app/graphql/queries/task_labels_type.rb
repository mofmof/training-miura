module Queries
  class TaskLabelsType < Queries::BaseQuery
    include Concern::LoginRequiredQuery

    argument :id, ID, required: true
    argument :addFlg, Boolean, required: true
    type [ObjectTypes::Label], null: false

    def resolve(args)
      task = context[:current_user].tasks.find(args[:id])
      label_all = context[:current_user].labels.order(created_at: :desc)
      not_add_label = label_all - task.labels
      args[:addFlg] ? not_add_label : task.labels
    end
  end
end
