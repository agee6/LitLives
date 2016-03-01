class Change < ActiveRecord::Migration
  def change

  	
  	add_column :books, :user_id, :integer, null: false, index: true
  	add_column :books, :genre, :string
  	remove_column :books, :year
  	add_column :books, :year, :integer
  	add_column :books, :read, :string
  	add_column :books, :ISBN13, :string
  	add_column :books, :ISBN10, :string
  end
end
