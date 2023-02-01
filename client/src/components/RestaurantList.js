import RestaurantVisits from "../pages/RestaurantVisits";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ eateries }) {

    const restaurantArray = eateries.map(restaurant => (
        <RestaurantCard
            key-={restaurant.id}
            restaurant={restaurant}
        />
    ))
    return (
        <div>
            <div>
                {restaurantArray}
            </div>
        </div>
    );
}

export default RestaurantList;