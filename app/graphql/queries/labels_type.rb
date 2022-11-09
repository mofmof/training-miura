module Queries
  class LabelsType < Queries::BaseQuery
    include Concern::LoginRequiredQuery

    type [ObjectTypes::Label], null: false

    def resolve
      context[:current_user].labels.order(:name)
    end
  end
end
