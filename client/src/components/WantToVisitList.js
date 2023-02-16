import WantToVisitCard from "./WantToVisitCard";
import React from "react";

function WantToVisitList({eateries}) {
    // const {eateries} = useContext(EateryContext)

    let eateryArray = null;

    if (eateries) {
        eateryArray = eateries.map(eatery => (
            <WantToVisitCard
                key={eatery.id}
                eatery={eatery}
            />
        ))
    }

    return (
        <div class="mx-20 my-10 grid grid-cols-2 gap-8">
            {eateryArray}
        </div>
    );
}

export default WantToVisitList;