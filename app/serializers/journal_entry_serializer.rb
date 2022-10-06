class JournalEntrySerializer < ActiveModel::Serializer
  attributes :id, :date, :emotion, :entry, :activities
  # has_one :journal
end
