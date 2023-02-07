class AddLatLongColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :eateries, :latitude, :float
    add_column :eateries, :longitude, :float
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
