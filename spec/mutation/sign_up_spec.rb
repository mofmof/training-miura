require 'rails_helper'

RSpec.describe Mutations::SignUp do
  describe 'user作成' do
    it 'userが作成されていること' do
      query_string = <<-GRAPHQL
        mutation signUp($name: String = "test_name", $email: String = "test@example.com", $password: String = "password", $passwordConfirmation: String = "password") {
          signUp(input: {params: {name: $name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation}}) {
            user {
              id
              name
              email
            }
          }
        }
      GRAPHQL
      result = MyappSchema.execute(query_string)
      expect(result["data"]["signUp"]["user"].present?).to eq true
      user = User.find_by(email: 'test@example.com')
      expect(user.present?).to eq true
    end
  end
end
