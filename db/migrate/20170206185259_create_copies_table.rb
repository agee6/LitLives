class CreateCopiesTable < ActiveRecord::Migration
  def change
    create_table :copies do |t|
      t.integer :user_id, null: false, index: true
      t.integer :book_id, null: false, index: true
      t.timestamps null: false
      t.date :start_date
      t.date :finish_date
    end
  end
end
