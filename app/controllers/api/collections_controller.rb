class Api::CollectionsController < ApplicationController

  def index
    if current_user
      @collections = current_user.collections
    end
  end

  def show
    @collection = Collection.find(params[:id])
    if current_user.id == @collection.user_id
      render :show
    end
  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id
    if @collection.save
      render :show
    else
      render json: {base: ['Collection did not save'], status: 401}
    end
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      render :show
    else
      render json: {base: ['Collection did not update'], status: 401}
    end
  end

  def destroy
    @collection = Collection.find(params[:id])
    @collection.destroy!
    render :show
  end

  private
  def collection_params
    params.require(:collection).permit(:title)
  end
end 
