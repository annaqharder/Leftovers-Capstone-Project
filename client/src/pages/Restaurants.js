import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantList from '../components/RestaurantList';

function Restaurants() {

    const { restaurants, setRestaurants } = useContext(RestaurantContext);

    let history = useHistory();





    return (
        <div>
        </div>
    );
}

export default Restaurants;