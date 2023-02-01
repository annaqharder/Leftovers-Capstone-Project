class EateryWithVisitsSerializer < ActiveModel::Serializer
  attributes :id, :eatery_name, :eatery_address, :eatery_neighborhood, :eatery_type, :eatery_category, :user_id, :visits

  def visits
    object.visits.map do |items|
      {
        id: visit.id,
        date: visit.date,
        occasion: visit.occasion,
        notes: visit.notes,
        drink: visit.drink,
        appetizer: visit.appetizer,
        food: visit.food,
        dessert: visit.dessert,
        other_consumables: visit.other_consumables,
        rating: visit.rating,
        visit_img: visit.visit_img,
        user: {
          id: item.user.id,
          fist_name: item.user.first_name
        }
      }
    end
  end

end
