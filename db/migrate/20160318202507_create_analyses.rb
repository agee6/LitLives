class CreateAnalyses < ActiveRecord::Migration
  def change
    create_table :analyses do |t|
      t.text :body, null: false
      t.string :title, null: false, index: true
      t.string :subtitle
      t.string :image_url
      t.integer :user_id, null: false, index: true
      t.integer :book_id, null: false, index: true
      t.integer :alt_book
      t.integer :second_alt_book
      t.boolean :public

      t.timestamps null: false
    end
  end
end
