module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, resolver: Queries::Tasks
    field :task, resolver: Queries::TaskType
    field :task_search_title, resolver: Queries::TaskSearchTitle

    field :users, resolver: Queries::Users
  end
end
