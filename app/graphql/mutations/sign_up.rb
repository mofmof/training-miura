module Mutations
  class SignUp < Mutations::BaseMutation
    argument :params, InputTypes::User, required: true

    field :user, ObjectTypes::User, null: false

    def resolve(params:)
      user = User.create(params.to_h)
      { user: }
    end
  end
end
