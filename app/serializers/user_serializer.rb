class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password_digest, :first_name, :last_name, :phone_number
end
