class JournalEntry < ApplicationRecord
#   validates_presence_of :date, :emotion, :entry 
  belongs_to :journal
end

