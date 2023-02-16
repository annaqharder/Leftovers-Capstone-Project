class VisitRating < ActiveRecord::Migration[7.0]
  def change
    add_column :visits, :rating, :integer
  end
end
