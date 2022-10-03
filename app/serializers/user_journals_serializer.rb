class UserJournalsSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name, :phone_number
  has_many :journals
end
