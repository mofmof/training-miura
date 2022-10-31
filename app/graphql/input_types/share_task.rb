module InputTypes
  class ShareTask < Types::BaseInputObject
    graphql_name 'ShareTaskAttributes'

    argument :title, String, required: true
    argument :state, String, required: false
    argument :first, Integer, required: false
    argument :after, String, required: false
  end
end
