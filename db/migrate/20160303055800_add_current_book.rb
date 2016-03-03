class AddCurrentBook < ActiveRecord::Migration
  def change
    add_column :users, :current_book, :integer
  end
end
