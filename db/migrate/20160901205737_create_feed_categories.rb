class CreateFeedCategories < ActiveRecord::Migration
  def change
    create_table :feed_categories do |t|
      t.integer :feed_id, null: false, index: true
      t.integer :category_id, null: false, index: true 
      t.timestamps null: false
    end
  end
end
