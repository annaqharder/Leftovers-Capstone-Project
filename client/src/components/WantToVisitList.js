import WantToVisitCard from "./WantToVisitCard";
import { EateryContext } from '../context/EateryProvider';
import React, {useContext} from "react";

function WantToVisitList() {
    const {eateries} = useContext(EateryContext)

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