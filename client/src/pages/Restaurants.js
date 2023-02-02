import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantList from '../components/RestaurantList';
import NewEateryForm from '../components/NewRestaurantForm';

function Restaurants() {

    const { restaurants } = useContext(RestaurantContext)
    let history = useHistory();


   // console.log(eateries)
    // const [ eateries, setEateries ] = useState([])
    // useEffect(() => {
    //     fetch("/eateries")
    //         .then((r) => r.json())
    //         .then(data => setEateries(data))
    // }, [])

    // const filteredForRestaurants = eateries.filter((eatery) => eatery.eatery_category == 'Restaurant')
    // console.log(filteredForRestaurants)

    return (
        <div>
            <div>
                <h1>My Restaurants</h1>
                <div>
                    <button>Add Restaurant</button>
                </div>
            </div>
            <div>
                <RestaurantList
                restaurants={restaurants}
                />
            </div>
            <div>
                <NewEateryForm />
            </div>
        </div>
    );
}

export default Restaurants;