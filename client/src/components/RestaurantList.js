import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants }) {

    const restaurantArray = restaurants.map(restaurant => (
        <RestaurantCard
            key={restaurant.id}
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