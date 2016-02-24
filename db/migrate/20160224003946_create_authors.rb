class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :pen_name, null: false, index: true
      t.string :legal_name
      t.string :last_name
      t.date :birth_date
      t.date :death_date
      t.string :country
      t.string :language

      t.timestamps null: false
    end
  end
end
