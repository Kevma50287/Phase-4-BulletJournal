class JournalActivityJoiner < ApplicationRecord
  belongs_to :journalentry
  belongs_to :activity
end
