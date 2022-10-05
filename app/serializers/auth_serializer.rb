class AuthSerializer < ActiveModel::Serializer
  attributes :jwt, :user
end
