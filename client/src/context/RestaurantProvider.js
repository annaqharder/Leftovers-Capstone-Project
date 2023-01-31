import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
    const { user } = useContext(UserContext);

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/restaurants`)
                .then((r) => r.json())
                .then((restaurants) => setRestaurants(restaurants))
        }
    }, [user])

    return (
        <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
            { children }
        </RestaurantContext.Provider>
    )
}

export { RestaurantContext, RestaurantProvider}