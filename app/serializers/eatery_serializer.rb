class EaterySerializer < ActiveModel::Serializer
  attributes :id, :eatery_name, :eatery_address, :eatery_neighborhood, :eatery_type, :eatery_category, :user_id
  has_many :visits
end
