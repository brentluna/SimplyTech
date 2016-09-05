class Api::FeedsController < ApplicationController

  def index
    #changed from Feed.all
    @feeds = current_user.feeds
  end

  def all_feeds
    @feeds = Feed.all
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def my_feeds

  end

end
