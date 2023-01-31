import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
    const { user } = useContext(UserContext);

    const [eateries, setEateries] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/eateries`)
                .then((r) => r.json())
                .then((eateries) => (
                    setEateries(eateries.filter((eatery) => eatery.eatery_category === "Coffee/Cafe"))
                ))
            }
    }, [user])

    return (
        <CoffeeContext.Provider value={{eateries, setEateries}}>
            { children }
        </CoffeeContext.Provider>
    )
}

export { CoffeeContext, CoffeeProvider}