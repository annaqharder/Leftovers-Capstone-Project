import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {

    console.log(restaurant)

    return (
        <div>
            <div>
                <Link to={`/restaurants/${restaurant.id}`} >
                    <h2>{restaurant.eatery_name}</h2>
                </Link>
                <h3>{restaurant.eatery_type}</h3>
                <h4>{restaurant.eatery_address}</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;