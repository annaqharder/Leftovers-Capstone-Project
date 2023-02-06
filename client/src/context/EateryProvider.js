import React, { createContext, useState, useEffect, useContext } from 'react';

const EateryContext = createContext();

function EateryProvider({ children }) {

    const [eateries, setEateries] = useState([]);

    useEffect(() => {
        fetch(`/eateries`)
        .then((r) => r.json())
        .then((eateries) => (
            setEateries(eateries.filter((eatery) => eatery.have_visited === false))
        ));
    }, [])

    return (
        <EateryContext.Provider value={{eateries, setEateries}}>
        { children }
        </EateryContext.Provider>
    )
}

export { EateryContext, EateryProvider }

