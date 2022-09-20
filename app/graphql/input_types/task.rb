module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskAttributes' # ObjectTypes::Taskと名前がバッティングしないようにする

    argument :title, String, required: true
    argument :body, String, required: true
<<<<<<< HEAD
    argument :state, Enum::TaskStateEnum, required: true
    argument :limit_at, GraphQL::Types::ISO8601Date, required: true
=======
    argument :limit_on, GraphQL::Types::ISO8601Date, required: true
>>>>>>> b3bc1ab7ff040b136dc46a7cb41caddaaeedc5e1
  end
end
