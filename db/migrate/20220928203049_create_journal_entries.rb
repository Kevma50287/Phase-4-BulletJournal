class CreateJournalEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :journal_entries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.datetime :date
      t.string :emotion
      t.string :entry
      t.string :activities, array:true, default: []

      t.timestamps
    end
  end
end
