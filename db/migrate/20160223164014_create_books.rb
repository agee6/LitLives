class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.integer :author_id
      t.integer :year, null: false
      t.integer :length
      t.string :publishing


      t.timestamps null: false
    end
  end
end
