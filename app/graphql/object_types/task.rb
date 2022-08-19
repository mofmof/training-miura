# frozen_string_literal: true

class ObjectTypes::Task < Types::BaseObject
  field :id, ID, null: false
  field :title, String, null: false
  field :body, String
  field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
end
