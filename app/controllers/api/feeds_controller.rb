class Api::FeedsController < ApplicationController

  def index
    @feeds = Feed.all
    sleep(2)
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def my_feeds

  end

end
