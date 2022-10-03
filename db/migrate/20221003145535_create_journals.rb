class CreateJournals < ActiveRecord::Migration[7.0]
  def change
    create_table :journals do |t|
      t.string :name
      t.bigint :user_id

      t.timestamps
    end
  end
end
