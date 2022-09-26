module Queries
  class BaseQuery < GraphQL::Schema::Resolver
    def login_required!
      raise GraphQL::ExecutionError, 'login required!!' unless context[:current_user]
    end

    def admin!
      raise GraphQL::ExecutionError, 'admin only!!' unless context[:current_user].admin?
    end
  end
end
