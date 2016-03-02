class AddBookColumns < ActiveRecord::Migration
  def change
    remove_column :books, :length
    add_column :books, :pages, :integer
    add_column :books, :language, :string
    add_column :books, :chapters, :integer
    add_column :books, :description, :text
  end
end
