class User < ApplicationRecord
  has_secure_password

  validates_presence_of :email, :first_name, :last_name, :phone_number, :username, :password_digest
  validates_uniqueness_of :username, :email

end
