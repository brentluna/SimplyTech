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

    @collection_feed = CollectionFeed.where(collection_id: params[:collection_feed][:collection_id]).where(feed_id: params[:collection_feed][:feed_id]).first
    debugger
    if @collection_feed.destroy
      render :show
      # render json: @collection_feed.collection
    else
      render json: {base: ['Unable to unsubscribe'], status: 401}
    end
  end


  private

  def collection_feed_params
    params.require(:collection_feed).permit(:feed_id, :collection_id)
  end
end
