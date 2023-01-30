class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date, :occasion, :category, :notes, :drink, :appetizer, :food, :dessert, :other_consumables, :visit_img
  has_one :user
  has_one :eatery
end
