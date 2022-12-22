require 'rails_helper'

RSpec.describe Mutations::SignUp do
  describe 'user作成' do
    it 'userが作成されていること' do
      result = MyappSchema.execute(
        sign_up_query, variables: {
          name: 'test_name',
          email: 'test@example.com',
          password: 'password',
          passwordConfirmation: 'password'
        }
      )
      expect(result.dig('data', 'signUp', 'user')).not_to be_blank
      user = User.find_by(email: 'test@example.com')
      expect(user).to be_present
    end

    it 'nameが空白だとエラーが発生すること' do
      result = MyappSchema.execute(
        sign_up_query, variables: {
          name: '',
          email: '',
          password: 'password',
          passwordConfirmation: 'password'
        }
      )
      # expect(result['errors'].first['message']).to eq("Name can't be blank")
      expect(result['errors'].first['message']).to include "Name can't be blank"
      expect(result['errors'].first['message']).to include "Email can't be blank"
    end
  end

  def sign_up_query
    <<-GRAPHQL
      mutation SignUp($name: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
        signUp(input:{params:{name: $name, email: $email, password: $password, passwordConfirmation: $passwordConfirmation}}) {
          user {
            id
            name
            email
          }
        }
      }
    GRAPHQL
  end
end
