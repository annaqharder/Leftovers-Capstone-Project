import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BarContext } from '../context/BarProvider';

function BarCard({ bar }) {

    let {bars, setBars} = useContext(BarContext)

    function handleDelete(){
        fetch(`/eateries/${restaurant.id}`, {
            method: "DELETE"
        })
        deletedRestaurant()
    }

    function deletedRestaurant() {
        const updatedRestaurantList = restaurants.filter(deletedRestaurant => {
            return deletedRestaurant.id !== restaurant.id
        })

        setRestaurants(updatedRestaurantList)
    }

    return (
        <div>
            <div>
                <Link to={`/bars/${bar.id}`} >
                    <h2>{bar.eatery_name}</h2>
                </Link>
                <h3>{bar.eatery_type}</h3>
                <h4>{bar.eatery_address}</h4>
            </div>
        </div>
    );
}

export default BarCard;