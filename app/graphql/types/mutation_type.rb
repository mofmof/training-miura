module Types
  class MutationType < Types::BaseObject
    field :create_task, mutation: Mutations::CreateTask
    field :update_task, mutation: Mutations::UpdateTask
    field :delete_task, mutation: Mutations::DeleteTask
    field :create_label, mutation: Mutations::CreateLabel
    field :delete_label, mutation: Mutations::DeleteLabel
    field :add_label_to_task, mutation: Mutations::AddLabelToTask
    field :remove_label_from_task, mutation: Mutations::RemoveLabelFromTask
    field :create_share_task, mutation: Mutations::CreateShareTask
    field :delete_share_task, mutation: Mutations::DeleteShareTask
    field :sign_up, mutation: Mutations::SignUp
  end
end
