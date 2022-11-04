# frozen_string_literal: true

module ObjectTypes
  class Task < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :body, String
    field :state, Enum::TaskStateEnum, null: false
    field :limit_on, GraphQL::Types::ISO8601Date
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :image_url, String

    field :labels, [ObjectTypes::Label], null: false

    def labels
      Loaders::AssociationLoader.for(::Task, :labels).load(object)
    end
  end
end
