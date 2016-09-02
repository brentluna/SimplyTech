class CreateCollectionFeeds < ActiveRecord::Migration
  def change
    create_table :collection_feeds do |t|
      t.integer :collection_id, null: false, index: true
      t.integer :feed_id, null: false, index: true 

      t.timestamps null: false
    end
  end
end
