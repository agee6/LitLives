class Note < ActiveRecord::Base
  validates :user_id, presence: true
  validates :book_id, presence: true
  validates :user_id, presence: true
  validates :public, presence: true

  belongs_to :user
  belongs_to :book


end
