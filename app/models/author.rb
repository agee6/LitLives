class Author < ActiveRecord::Base
  validates :pen_name, presence: true
  has_many :books
end
