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
            <div class="mx-20 my-10 grid grid-cols-2 gap-8">
                {restaurantArray}
            </div>
        </div>
    );
}

export default RestaurantList;