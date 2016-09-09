class Api::FavoritesController < ApplicationController

  def index
    @favorites = current_user.favorites.order(published: :desc)
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id

    if @favorite.save
      render :show
    else
      render json: {base: ["Article didn't save"]}, status: 401
    end

  end

  def show
    @favorite = Favorite.find(params[:id])
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render :index
  end

  def favorite_params
    params.require(:favorite).permit(:author, :feed, :image, :published, :summary, :title, :url, :id)
  end
end
