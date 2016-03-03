class Api::UsersController < ApplicationController
  def show
    if current_user.current_book == nil
      user_book = nil
    else
      book_id = current_user.current_book
      user_book = Book.find_by_id(book_id)
    end
    render json: user_book
  end
  def update
    @user = current_user

    if @user.update({current_book: user_params[:current_book]})
      render json: @user.current_book
    else
      render json: @user.errors.full_messages
    end

  end
  private
  def user_params
    params.permit(:current_book)
  end


end
