import React, { useContext, createContext, useState, useEffect } from 'react';
import { EateryContext } from './EateryProvider';

const VisitContext = createContext();

function VisitProvider({ children }) {
    const {eateries} = useContext(EateryContext)
    const [visits, setVisits] = useState([])

    useEffect(() => {
        if(eateries) {
            fetch(`/visits`)
                .then((r) => r.json())
                .then((visits) => (
                    setVisits(visits)
                ))
            }
    }, [eateries])

    return (
        <VisitContext.Provider value={{visits, setVisits}}>
            { children }
        </VisitContext.Provider>
    )
}

export { VisitContext, VisitProvider}