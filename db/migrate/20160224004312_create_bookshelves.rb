class CreateBookshelves < ActiveRecord::Migration
  def change
    create_table :bookshelves do |t|
      t.integer :user_id, null: false, index: true


      t.timestamps null: false
    end
  end
end
