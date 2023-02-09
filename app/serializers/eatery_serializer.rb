class EaterySerializer < ActiveModel::Serializer
  attributes :id, :eatery_name, :eatery_address, :eatery_neighborhood, :eatery_type, :eatery_category, :user_id, :have_visited, :eatery_img, :eatery_notes, :latitude, :longitude
  has_many :visits
end
