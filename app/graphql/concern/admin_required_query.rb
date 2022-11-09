module Concern::AdminRequiredQuery
  def authorized?
    raise GraphQL::ExecutionError, 'admin only!!' unless context[:current_user].admin?

    true
  end
end
