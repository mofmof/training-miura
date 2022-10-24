module Concern::LoginRequiredQuery
  def authorized?(**_args)
    raise GraphQL::ExecutionError, 'login required!!' if context[:current_user].blank?

    true
  end
end
