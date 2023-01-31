import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
    const { user } = useContext(UserContext);

    const [eateries, setEateries] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/eateries`)
                .then((r) => r.json())
                .then((eateries) => (
                    setEateries(eateries.filter((eatery) => eatery.eatery_category === "Restaurant"))
                ))
            }
    }, [user])

    return (
        <RestaurantContext.Provider value={{eateries, setEateries}}>
            { children }
        </RestaurantContext.Provider>
    )
}

export { RestaurantContext, RestaurantProvider}