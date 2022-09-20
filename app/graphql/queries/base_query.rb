module Queries
  class BaseQuery < GraphQL::Schema::Resolver
    def login_required!
      raise GraphQL::ExecutionError, 'login required!!' unless context[:current_user]
    end
  end
end
