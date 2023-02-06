import React, { useContext, createContext, useState, useEffect } from 'react';
import { UserContext } from './UserProvider';

const BarContext = createContext();

function BarProvider({ children }) {
    const { user } = useContext(UserContext);

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
    }, [user])

    return (
        <BarContext.Provider value={{bars, setBars}}>
            { children }
        </BarContext.Provider>
    )
}

export { BarContext, BarProvider }