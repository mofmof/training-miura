# frozen_string_literal: true

module ObjectTypes
  class TaskLabel < Types::BaseObject
    field :id, ID, null: false
    field :task_id, Integer, null: false
    field :label_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
