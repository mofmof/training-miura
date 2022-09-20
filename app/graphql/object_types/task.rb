# frozen_string_literal: true

module ObjectTypes
  class Task < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :body, String
<<<<<<< HEAD
    field :state, Enum::TaskStateEnum, null: false
    field :limit_at, GraphQL::Types::ISO8601Date
    field :user_id, Integer, null: false
=======
    field :limit_on, GraphQL::Types::ISO8601Date
    field :user_id, Integer
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
