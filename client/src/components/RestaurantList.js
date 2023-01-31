import RestaurantCard from "./RestaurantCard";

function RestaurantList({ eateries }) {
    return (
        <div>
            <div>
                {eateries.map(restaurant => (
                    <div>
                        <RestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantList;