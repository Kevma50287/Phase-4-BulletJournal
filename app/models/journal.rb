class Journal < ApplicationRecord
  has_many :shared_journals
  has_many :users, through: :shared_journals
  has_many :journal_entries, dependent: :destroy
end
