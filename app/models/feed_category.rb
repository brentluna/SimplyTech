class FeedCategory < ActiveRecord::Base
  validates :feed, :category, presence: true
  
  belongs_to :feed
  belongs_to :category
end
