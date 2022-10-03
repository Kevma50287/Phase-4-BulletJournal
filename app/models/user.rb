class User < ApplicationRecord
  has_many :shared_journals, dependent: :destroy
  has_many :journals, through: :shared_journals, dependent: :destroy
  has_secure_password

  validates_presence_of :email, :first_name, :last_name, :phone_number, :username, :password_digest
  validates_uniqueness_of :username, :email

end
