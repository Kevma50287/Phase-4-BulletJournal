class JournalEntry < ApplicationRecord
  belongs_to :user

  validates_presence_of :date, :emotion, :entry 
  
end
