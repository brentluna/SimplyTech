class ChangeFavoriteColumn < ActiveRecord::Migration
  def change
    rename_column :favorites, :feed_id, :feed
    change_column :favorites, :feed, :string 

  end
end
