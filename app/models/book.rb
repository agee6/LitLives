class Book < ActiveRecord::Base
  validates :user_id, presence: true
  validates :title, presence: true
  validates :read, inclusion: {in: %w(read toRead reading)}

  belongs_to :user

  def self.sort_user_books(user_id)
    theBooks = Book.where({user_id: user_id})
    readArray = []
    toReadArray = []
    readingArray = []
    theBooks.each do |book|
      if book.read == "read"
        readArray.push(book)
      elsif book.read == "toRead"
        toReadArray.push(book)
      else
        readingArray.push(book)
      end
    end

    {read: readArray, toRead: toReadArray, reading: readingArray}
  end


end
