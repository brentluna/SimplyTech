class Collection < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user

  has_many :collection_feeds

  has_many :feeds,
    through: :collection_feeds,
    source: :feed
end
