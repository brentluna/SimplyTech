class Category < ActiveRecord::Base
  validates :title, :image, presence: true

  has_many :feed_categories

  has_many :feeds,
    through: :feed_categories,
    source: :feed
end
