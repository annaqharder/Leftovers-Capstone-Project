import React, { useContext, createContext, useState, useEffect } from 'react';
import { EateryContext } from './EateryProvider';
import { useParams } from 'react-router-dom';

const VisitContext = createContext();

function VisitProvider({ children }) {
    const {eateries} = useContext(EateryContext)

    const [visits, setVisits] = useState([])

    useEffect(() => {
        if(eateries) {
            fetch(`/visits`)
                .then((r) => r.json())
                .then((visits) => (
                    setVisits(visits.filter((visit) => visit[eateries.id] === eateries.id))
                ))
            }
    }, [eateries])

    // console.log(visits)

    return (
        <VisitContext.Provider value={{visits, setVisits}}>
            { children }
        </VisitContext.Provider>
    )
}

export { VisitContext, VisitProvider}