class Journal < ApplicationRecord
  belongs_to :user
  has_many :journal_entries, dependent: :destroy
end
