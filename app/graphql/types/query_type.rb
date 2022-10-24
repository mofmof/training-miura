module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :tasks, resolver: Queries::TasksType
    field :task, resolver: Queries::TaskType
    field :share_tasks, resolver: Queries::ShareTasksType

    field :labels, resolver: Queries::LabelsType
    field :unadded_task_labels, resolver: Queries::UnaddedTaskLabelsType

    field :users, resolver: Queries::Users
    field :share_users, resolver: Queries::ShareUsersType
    field :unshare_users, resolver: Queries::UnshareUsersType
  end
end
