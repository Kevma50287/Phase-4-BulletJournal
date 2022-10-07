class FriendSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_picture
end
