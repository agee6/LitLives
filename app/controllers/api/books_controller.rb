class Api::BooksController < ApplicationController
  def create
    input_hash = {user_id: current_user.id}
    creation_hash = book_params.merge(input_hash)

    @book = Book.new(creation_hash)

    if @book.save
      current_user.update({current_book: @book.id})
      render json: @book
    else
      flash.now[:errors] = @book.errors.full_messages
      render json: @book.errors
    end

  end


  def show
    @book = Book.find_by_id(params[:id])
    render json: @book
  end

  def index
    render json: Book.sort_user_books(current_user.id)
  end

  private
  def book_params
    params.permit(:author, :genre, :title, :publishing, :year, :read, :ISBN13, :ISBN10, :description, :pages, :image, :language)
  end

end
