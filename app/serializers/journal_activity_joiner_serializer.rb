class JournalActivityJoinerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :journalentry
  has_one :activity
end
