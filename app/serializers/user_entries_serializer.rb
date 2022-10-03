class UserEntriesSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :first_name, :last_name, :phone_number

  has_many :journal_entries

end
