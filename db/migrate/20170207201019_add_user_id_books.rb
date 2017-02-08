class AddUserIdBooks < ActiveRecord::Migration
  def change
    add_column :books, :user_id, :integer, null: false, index: true
    add_column :analyses, :ISBN13, :string, index: true
    add_column :analyses, :ISBN10, :string, index: true
    add_column :essays, :ISBN13, :string, index: true
    add_column :essays, :ISBN10, :string, index: true
    add_column :notes, :book_id, :integer, null: false, index: true
    remove_column :notes, :copy_id
    add_column :reviews, :ISBN13, :string, null: false, index: true
    add_column :reviews, :ISBN10, :string, index: true
    remove_column :reviews, :book_id

  end
end
