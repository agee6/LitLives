class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :body, null: false
      t.string :title
      t.integer :page
      t.integer :chapter
      t.integer :user_id, null: false, index: true
      t.integer :book_id, null: false, index: true
      t.boolean :public, null: false, index: true

      t.timestamps null: false
    end
  end
end
