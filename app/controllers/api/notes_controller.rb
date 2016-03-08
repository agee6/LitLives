class Api::NotesController < ApplicationController

  def index

    @notes = Note.where({user_id: current_user.id, book_id: params[:book_id]})
    render json: @notes

  end
  def show

  end
  def create
    addendum = {user_id: current_user.id}
    creation_hash = addendum.merge(note_params)
    p creation_hash
    @note = Note.new(creation_hash)
    p @note
    if @note.save
      render json: @note
    else
      render json: nil
    end

  end
  def new

  end
  def edit

  end
  def update

  end
  def destroy

  end
  

  private

  def note_params
    params.require(:note).permit(:user_id, :book_id, :body, :title, :public, :page, :chapter)
  end

end
