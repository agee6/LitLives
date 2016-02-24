class CreateGenreInstances < ActiveRecord::Migration
  def change
    create_table :genre_instances do |t|
      t.integer :book_id, null: false, index: true
      t.integer :genre_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
