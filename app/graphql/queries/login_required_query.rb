module Queries
  class LoginRequiredQuery < Queries::BaseQuery
    def authorized?(**_args)
      raise GraphQL::ExecutionError, 'login required!!' if context[:current_user].blank?

      true
    end
  end
end