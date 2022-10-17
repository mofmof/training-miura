module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, resolver: Queries::TasksType
    field :task, resolver: Queries::TaskType

    field :labels, resolver: Queries::LabelsType

    field :users, resolver: Queries::Users
  end
end
