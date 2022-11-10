module InputTypes
  class Task < Types::BaseInputObject
    graphql_name 'TaskAttributes' # ObjectTypes::Taskと名前がバッティングしないようにする

    argument :title, String, required: true
    argument :body, String, required: false
    argument :state, Enum::TaskStateEnum, required: true
    argument :limit_on, String, required: false
    argument :image, ObjectTypes::File, required: false
  end
end
