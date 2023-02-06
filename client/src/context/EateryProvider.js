import React, { createContext, useState, useEffect } from 'react';

const EateryContext = createContext();

function EateryProvider({ children }) {

    const [eateries, setEateries] = useState([]);

    useEffect(() => {
        fetch(`/eateries`)
        .then((r) => r.json())
        .then((eateries) => (
            setEateries(eateries.filter((eatery) => eatery.have_visited === false)))
        );
    }, [eateries])

    return (
        <EateryContext.Provider value={{eateries, setEateries}}>
        { children }
        </EateryContext.Provider>
    )
}

export { EateryContext, EateryProvider }

