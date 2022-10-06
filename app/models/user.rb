class User < ApplicationRecord
  has_many :shared_journals, dependent: :destroy
  has_many :journals, through: :shared_journals, dependent: :destroy
  has_many :friends, class_name:"User", foreign_key:"friend_id"
  belongs_to :friend, class_name: "User", optional: true
  has_secure_password

  validates_presence_of :email, :first_name, :last_name, :phone_number, :username
  validates_uniqueness_of :username, :email

  has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow"

  # Will return an array of users who follow the user instance
  has_many :followers, through: :received_follows, source: :follower
  
  # returns an array of follows a user gave to someone else
  has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
  
  # returns an array of other users who the user has followed
  has_many :followings, through: :given_follows, source: :followed_user

  # FIXME:How to serialize this?
  def friends_array
    self.followings + self.followers
  end
end
