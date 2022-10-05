class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name, :phone_number, :recent_mood, :primary_journal_id
  has_many :journals
end
