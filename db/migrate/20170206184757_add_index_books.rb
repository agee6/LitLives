class AddIndexBooks < ActiveRecord::Migration
  def change
    add_index :books, :title
    remove_column :books, :user_id
    add_index :books, :author
    add_index :books, :year
    add_column :books, :amazon_url, :string
    add_column :books, :other_url, :string
  end
end
