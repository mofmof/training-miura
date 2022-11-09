class TaskSerializer < ActiveModel::Serializer
  attributes %i[id title body limit_on state]
end
