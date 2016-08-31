class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string :title, null: false, unique: true, index: true
      t.string :url, null: false
      t.string :description, null: false
      t.string :logo

      t.timestamps null: false
    end
  end
end
