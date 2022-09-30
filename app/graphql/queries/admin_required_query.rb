module Queries
  class AdminRequiredQuery < Queries::BaseQuery
    def authorized?
      raise GraphQL::ExecutionError, 'admin only!!' unless context[:current_user].admin?

      true
    end
  end
end
