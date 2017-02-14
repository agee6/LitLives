class Review < ActiveRecord::Base
  validates :user_id, presence: true
  validates :ISBN13, presence: true
  belongs_to :user

  def self.get_reviews ISBN13
    self.where({ISBN13: ISBN13})
  end



end
