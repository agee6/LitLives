class Api::BooksController < ApplicationController
  def create
    input_hash = {user_id: current_user}
    creation_hash = book_params.merge(input_hash)
    @book = Book.new(creation_hash)

    if @book.save
      render json: @book
    else
      flash.now[:errors] = @book.errors.full_messages
      render json: @book.errors
    end


  end
  def show


  end
  def index


  end

  private
  def book_params
    params.permit(:user_id, :author, :genre, :title, :length, :publishing, :year, :read, :ISBN13, :ISBN10, :description)
  end
end
