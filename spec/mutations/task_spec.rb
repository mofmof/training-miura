require 'rails_helper'

RSpec.describe Mutations::CreateTask do
  describe 'user作成' do
    let!(:user) { create(:user) }

    it 'taskが作成されていること' do
      result = MyappSchema.execute(
        create_task_query,
        variables: {
          title: 'テストタイトル',
          body: 'テストボディ',
          state: 'unstarted'
        },
        context: { current_user: user }
      )
      expect(result.dig('data', 'createTask', 'task')).not_to be_blank
    end
  end

  def create_task_query
    <<-GRAPHQL
      mutation createTask($title: String!, $body: String!, $state: TaskStateEnum!) {
        createTask(input: { params: { title: $title, body: $body, state: $state } }) {
          task {
            id
            title
            body
            userId
          }
        }
      }
    GRAPHQL
  end
end
