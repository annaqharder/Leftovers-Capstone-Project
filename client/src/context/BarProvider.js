import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';
import { EateryContext } from './EateryProvider';

const BarContext = createContext();

function BarProvider({ children }) {
    const { user } = useContext(UserContext);
    const { eateries } = useContext(EateryContext)

    const [bars, setBars] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`/eateries`)
                .then((r) => r.json())
                .then((eateries) => (
                    setBars(eateries.filter((eatery) => (
                        eatery.eatery_category === "Bar" && eatery.have_visited === true
                    )))
                ))
            }
    }, [user, eateries])

    return (
        <BarContext.Provider value={{bars, setBars}}>
            { children }
        </BarContext.Provider>
    )
}

export { BarContext, BarProvider }