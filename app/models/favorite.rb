class Favorite < ActiveRecord::Base
  validates :user, :feed, :url, presence: true

  belongs_to :user

end
