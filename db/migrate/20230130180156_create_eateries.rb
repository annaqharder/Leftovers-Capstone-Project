class CreateEateries < ActiveRecord::Migration[7.0]
  def change
    create_table :eateries do |t|
      t.string :eatery_name
      t.string :eatery_address
      t.string :eatery_neighborhood
      t.string :eatery_category
      t.string :eatery_type
      t.boolean :have_visited
      t.belongs_to :user

      t.timestamps
    end
  end
end
