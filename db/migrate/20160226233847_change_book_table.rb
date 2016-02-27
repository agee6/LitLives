class ChangeBookTable < ActiveRecord::Migration
  def change
    remove_column :books, :author_id
    add_column :books, :author, :string
  end
end
