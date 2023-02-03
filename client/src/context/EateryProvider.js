import React, { createContext, useState, useEffect } from 'react';

const EateryContext = createContext();

function EateryProvider({ children }) {

    const [eatery, setEatery] = useState(null);

    useEffect(() => {
        fetch(`/eateries`)
        .then((r) => r.json())
        .then((eatery) => setEatery(eatery));
    }, [])

    return (
        <EateryContext.Provider value={{eatery, setEatery}}>
        { children }
        </EateryContext.Provider>
    )
}

export { EateryContext, EateryProvider }

