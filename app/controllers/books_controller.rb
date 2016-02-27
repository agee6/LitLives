class BooksController < ApplicationController

  def create

  end
  def show

  end
  def index
  end

  private
  def book_params
    params.permit(:user_id, :author, :genre, :title, :length, :publishing, :year, :read, :ISBN13, :ISBN10)
  end
end
