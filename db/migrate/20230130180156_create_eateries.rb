class CreateEateries < ActiveRecord::Migration[7.0]
  def change
    create_table :eateries do |t|
      t.string :eatery_name
      t.string :eatery_address
      t.string :eatery_location

      t.timestamps
    end
  end
end
