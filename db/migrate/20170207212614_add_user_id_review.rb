class AddUserIdReview < ActiveRecord::Migration
  def change
    add_column :reviews, :user_id, :integer, null: false, index: true
  end
end
