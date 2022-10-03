class JournalEntry < ApplicationRecord
  belongs_to :journal
  has_many :journal_activity_joiners
  has_many :activities, through: :journal_activity_joiners
end
