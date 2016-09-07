class Api::FeedsController < ApplicationController

  def index
    #changed from Feed.all
    @feeds = Feed.all
  end

  def all_feeds
    @feeds = Feed.all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def search
    if params[:query].present?
      @feeds = Feed.where("title ILIKE ?", "%#{params[:query]}%")

    else
      @feeds = Feed.none
    end
  end

  # def my_feeds
  #   @feeds = []
  #   current_user.collections.each_with_index do |collection, idx|
  #     @feeds << {collection: collection, entries: []}
  #     collection.feeds.each do |feed|
  #       @feeds[idx][:entries] += feedjira_entires(feed)
  #     end
  #     @feeds[idx][:entires].sort! { |a, b| b[:published <=> a[:published] }
  #   end
  #   render :index
  # end

end
