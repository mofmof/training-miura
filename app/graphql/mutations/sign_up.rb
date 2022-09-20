module Mutations
  class SignUp < Mutations::BaseMutation
    argument :params, InputTypes::User, required: true

    field :user, ObjectTypes::User, null: false

    def resolve(params:)
      user = User.new(params.to_h)
      if user.save
        { user: user }
      else
        raise GraphQL::ExecutionError, user.errors.full_messages.join("\n")
      end
    end
  end
end
