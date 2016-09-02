class Feed < ActiveRecord::Base
  validates :title, :description, :url, presence: true

  has_many :feed_categories

  has_many :categories,
    through: :feed_categories,
    source: :category
end
