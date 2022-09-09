module InputTypes
  class User < Types::BaseInputObject
    graphql_name 'UserAttributes' # ObjectTypes::Taskと名前がバッティングしないようにする

    argument :name, String, required: false
    argument :email, String, required: false
    argument :password, String, required: false
    argument :password_confirmation, String, required: false
  end
end
