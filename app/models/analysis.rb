class Analysis < ActiveRecord::Base
  validates :user_id, presence: true
  validates :book_id, presence: true
  validates :public, presence: true
  validates :title, presence: true

  belongs_to :user
  belongs_to :book

end
