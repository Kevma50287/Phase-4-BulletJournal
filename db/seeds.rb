# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(
  username: "Kevin",
  email:"magavakevin10@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  phone_number: "347-935-7112",
  password: "123",
  password_confirmation: "123",
  recent_mood:'neutral',
  primary_journal_id:4
)

User.create!(
  username: "K",
  email:"123@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  phone_number: "347-935-7112",
  password: "123",
  password_confirmation: "123",
  recent_mood:'neutral',
  primary_journal_id:1
)

User.create!(
  username: "B",
  email:"12w33@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  phone_number: "347-935-7112",
  password: "123",
  password_confirmation: "123",
  recent_mood:'neutral',
  primary_journal_id:2
)

User.create!(
  username: "Basdas",
  email:"12was33@gmail.com",
  first_name: "Kevin",
  last_name: "Ma",
  phone_number: "347-935-7112",
  password: "123",
  password_confirmation: "123",
  recent_mood:'neutral',
  primary_journal_id:3
)

Journal.create!(
  name:"Test"
)

Journal.create!(
  name:"Test Shared"
)

Journal.create!(
  name:"Test Woohoo"
)

Journal.create!(
  name:"Test Bang Bang Bang"
)


SharedJournal.create!(
  user_id:1,
  journal_id:1
)

SharedJournal.create!(
  user_id:1,
  journal_id:2
)

SharedJournal.create!(
  user_id:2,
  journal_id:2
)

JournalEntry.create!(
  journal_id:1,
  date:"2022-10-03",
  emotion:"depressed",
  entry:"Beep Boop 123",
  activities:["study", "workout"]
)

JournalEntry.create!(
  journal_id:1,
  date:"2022-10-02",
  emotion:"depressed",
  entry:"sdfsdfsdf",
  activities:["workout"]
)

JournalEntry.create!(
  journal_id:2,
  date:"2022-10-03",
  emotion:"neutral",
  entry:"leeloooo",
  activities:["study", "workout"]
)

JournalEntry.create!(
  journal_id:2,
  date:"2022-10-05",
  emotion:"happy",
  entry:"Swiggidy swagagidy",
  activities:["workout"]
)

Follow.create!(
  follower_id: 1,
  followed_user_id:2
)

Follow.create!(
  follower_id: 1,
  followed_user_id:3
)

Follow.create!(
  follower_id: 1,
  followed_user_id:4
)

Follow.create!(
  follower_id: 2,
  followed_user_id:4
)