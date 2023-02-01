class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.date :date
      t.string :occasion
      t.text :notes
      t.text :drink
      t.text :appetizer
      t.text :food
      t.text :dessert
      t.text :other_consumables
      t.string :visit_img
      t.integer :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :eatery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
