class AddHaveVisitedEatery < ActiveRecord::Migration[7.0]
  def change
    add_column :eateries, :have_visited, :boolean
  end
end
