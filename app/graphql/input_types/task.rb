module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskAttributes' # ObjectTypes::Taskと名前がバッティングしないようにする

    argument :title, String, required: true
    argument :body, String, required: true
    argument :limit_on, GraphQL::Types::ISO8601Date, required: true
  end
end
