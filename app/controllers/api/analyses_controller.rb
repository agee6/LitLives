
# create_table "analyses", force: :cascade do |t|
#   t.text     "body",            null: false
#   t.string   "title",           null: false
#   t.string   "subtitle"
#   t.string   "image_url"
#   t.integer  "user_id",         null: false
#   t.integer  "book_id",         null: false
#   t.integer  "alt_book"
#   t.integer  "second_alt_book"
#   t.boolean  "public"
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
# end


class Api::AnalysesController < ApplicationController

  def index

    if analyses_params == {}
      @analyses = Analysis.all()
      p "h2"
    else
      @analyses = Analysis.where(analysis_params)
    end
    p "hello"
    render json: @analyses

  end

  def show
    @analysis = Analysis.find_by_id(params[:id]);

    if @analysis
      render json: @analysis

    else
      render json: nil
    end

  end

  def create
    creation_hash = analysis_params.merge({user_id: current_user().id})
    @anlysis = Analysis.new(creation_hash)

    if @analysis.save
      render json: @analysis
    else
      render json: nil
    end

  end

  def update
    @analysis = Analysis.find_by_id(params[:analysis][:id])

    if @analysis.update(analysis_params)

      render json: @analysis
    else

      render json: nil
    end

  end

  def destroy


  end
  private
  def analyses_params
    params.permit(:title, :subtitle, :body, :book_id, :alt_book, :book, :image_url, :second_alt_book, :public)
  end
  def analysis_params
    params.require(:analyis).permit(:title, :subtitle, :body, :book_id, :alt_book, :book, :image_url, :second_alt_book, :book_isbn, :public)
  end
end
