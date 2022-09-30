class CreateJournalActivityJoiners < ActiveRecord::Migration[7.0]
  def change
    create_table :journal_activity_joiners do |t|
      t.belongs_to :journal_entry, null: false, foreign_key: true
      t.belongs_to :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
