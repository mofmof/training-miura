module Queries
  class LoginRequiredQuery < Queries::BaseQuery
    def authorized?
      raise GraphQL::ExecutionError, 'login required!!' if context[:current_user].blank?

      true
    end
  end
end
