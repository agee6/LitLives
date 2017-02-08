class AddColumnBookshelf < ActiveRecord::Migration
  def change
    add_column :bookshelves, :name, :string, null: false
    remove_column :notes, :book_id
    add_column :authors, :bio, :text
    add_column :notes, :copy_id, :integer, null: false, index: true
  end
end
