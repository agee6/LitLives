class Api::SessionsController < ApplicationController
  def show
    @user = current_user
    render json: current_user

  end
  def create
    @user = User.find_by_credentials(params[:username], params[:password]);
    p @user
    if @user.nil?
      render json: []
    else
      login(@user)
      render json: @user
    end
  end

  def destroy
    @user = current_user
    logout
    render json: []

  end
  private
  def session_params
    params.permit(:username, :password)
  end
end
