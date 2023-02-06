import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';
import { EateryContext } from './EateryProvider';
const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
    const { user } = useContext(UserContext);
    const { eateries } = useContext(EateryContext)

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/eateries`)
                .then((r) => r.json())
                .then((eateries) => (
                    setRestaurants(eateries.filter((eatery) => (
                        eatery.eatery_category === "Restaurant" && eatery.have_visited === true
                    )))
                ))
            }
    }, [user,eateries])


    return (
        <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
            { children }
        </RestaurantContext.Provider>
    )
}

export { RestaurantContext, RestaurantProvider}