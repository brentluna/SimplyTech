class CollectionFeed < ActiveRecord::Base
  validates :feed, :collection, presence: true

  belongs_to :feed
  belongs_to :collection 
end
