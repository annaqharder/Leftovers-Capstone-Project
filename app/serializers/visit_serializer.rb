class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :occasion, :notes, :drink, :appetizer, :food, :dessert, :other_consumables, :visit_img, :rating
  has_one :user
  has_one :eatery
end
