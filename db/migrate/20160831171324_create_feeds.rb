class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :title, null: false, index: true
      t.string :url, null: false
      t.string :logo
      t.string :description, null: false
      t.timestamps null: false
    end
  end
end
