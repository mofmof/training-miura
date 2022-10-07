require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validation' do
    it 'is invalid without name' do
      user_without_name = build(:user, name: "")
      expect(user_without_name).to be_invalid
      expect(user_without_name.errors[:name]).to eq ["can't be blank"]
    end
  end
end
