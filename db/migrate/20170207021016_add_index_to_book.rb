class AddIndexToBook < ActiveRecord::Migration
  def change
    add_index :books, :ISBN10
    add_index :books, :ISBN13
  end
end
