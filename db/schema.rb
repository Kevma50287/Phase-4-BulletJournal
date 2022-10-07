# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_05_192318) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followed_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "journal_entries", force: :cascade do |t|
    t.bigint "journal_id", null: false
    t.datetime "date"
    t.string "emotion"
    t.string "entry"
    t.string "activities", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["journal_id"], name: "index_journal_entries_on_journal_id"
  end

  create_table "journals", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shared_journals", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "journal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["journal_id"], name: "index_shared_journals_on_journal_id"
    t.index ["user_id"], name: "index_shared_journals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.bigint "primary_journal_id"
    t.string "profile_picture"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "journal_entries", "journals"
  add_foreign_key "shared_journals", "journals"
  add_foreign_key "shared_journals", "users"
end
