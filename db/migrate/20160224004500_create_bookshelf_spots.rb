class CreateBookshelfSpots < ActiveRecord::Migration
  def change
    create_table :bookshelf_spots do |t|
      t.integer :bookshelf_id, null: false, index: true
      t.integer :book_id, null: false, index: true
      t.string :read, null: false, index: true

      t.timestamps null: false
    end
  end
end
