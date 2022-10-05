class JournalSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :journal_entries
end
