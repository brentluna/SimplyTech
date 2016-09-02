class Api::CollectionFeedsController < ApplicationController


  def create
    @collection_feed = CollectionFeed.new(collection_feed_params)
    if @collection_feed.save
      render :show
    else
      render json: {base: ['Was unable to subscribe.'], status: 401}
    end
  end

  def show
    @collection_feed = CollectionFeed.find(params[:id])
  end

  def destroy
    @collection_feed = CollectionFeed.find(params[:id])
    if @collection_feed.destroy
      render :show
    else
      render json: {base: ['Unable to unsubscribe'], status 401}
    end
  end

      
  private

  def collection_feed_params
    params.require(:collection_feed).permitj(:feed_id, :collection_id)
  end
end
