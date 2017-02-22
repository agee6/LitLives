class Review < ActiveRecord::Base
  validates :user_id, presence: true
  validates :ISBN13, presence: true
  belongs_to :user


end
