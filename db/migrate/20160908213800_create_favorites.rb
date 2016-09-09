class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false, index: true
      t.string :author
      t.string :title
      t.integer :feed_id, null: false, index: true
      t.string :image
      t.string :published
      t.text :summary
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
