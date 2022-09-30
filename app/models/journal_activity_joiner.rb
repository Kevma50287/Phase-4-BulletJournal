class JournalActivityJoiner < ApplicationRecord
  belongs_to :journal_entry
  belongs_to :activity
end
