class AddEateryImage < ActiveRecord::Migration[7.0]
  def change
    add_column :eateries, :eatery_img, :string
  end
end
