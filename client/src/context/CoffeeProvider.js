import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';
import { EateryContext } from './EateryProvider';

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
    const { user } = useContext(UserContext);
    const {eateries} = useContext(EateryContext)

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/eateries`)
                .then((r) => r.json())
                .then((eateries) => (
                    setCoffees(eateries.filter((eatery) => (
                        eatery.eatery_category === "Coffee/Cafe" && eatery.have_visited === true
                    )))
                ))
            }
    }, [user, eateries])

    return (
        <CoffeeContext.Provider value={{coffees, setCoffees}}>
            { children }
        </CoffeeContext.Provider>
    )
}

export { CoffeeContext, CoffeeProvider}