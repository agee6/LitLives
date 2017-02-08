class CreateTable < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :book_id, null: false, index: true
      t.text :body
      t.string :rich
      t.integer :rating, null: false, index: true


      t.timestamps null: false
    end
  end
end
