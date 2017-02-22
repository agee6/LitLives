class Api::ReviewsController < ApplicationController
  def create
    input_hash = {user_id: current_user.id}
    creation_hash = review_params.merge(input_hash)
    @review = Review.new(creation_hash)
    if @review.save
      render json: @review
    else
      flash.now[:errors] = @review.errors.full_messages
      render json: @review.errors, status: 422
    end
  end
  def update
    @review = Review.find_by_id(params[:id])
    if @review.update(book_params)
      self.index
    else
      render json: nil
    end
  end
  def destroy
    @review=Review.find_by_id(params[:id]);
    @review.destroy
    self.index
  end

  def show
    @review = Review.where({ISBN13:review_params[:ISBN13]});
    p @review
    render json: @review
  end

  def index
    p review_params[:ISBN13]
    render json: Review.where({ISBN13:review_params[:ISBN13]})
  end

  private
  def review_params
    params.require(:Review).permit(:ISBN13, :ISBN10, :rating, :body,:rich, :title, :user_id)
  end


end
