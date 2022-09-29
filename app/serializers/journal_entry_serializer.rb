class JournalEntrySerializer < ActiveModel::Serializer
  attributes :id, :date, :emotion, :entry
  has_one :user
end
