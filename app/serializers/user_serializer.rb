class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name, :phone_number, :recent_mood, :primary_journal_id, :friends
  has_many :journals

  def friends
    return object.friends_array
  end
end
