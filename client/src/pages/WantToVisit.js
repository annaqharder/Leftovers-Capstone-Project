import React, {useState} from 'react';
import WantToVisitForm from '../components/NewWantToVisitForm';
import WantToVisitList from '../components/WantToVisitList';

function WantToVisit() {

    // const [eateries, setEateries] = useState([])

    return (
        <div>
            <div>
                <h1>Eateries I Want To Visit</h1>
            </div>
            <div>
                <WantToVisitList/>
            </div>

            <div>
                <WantToVisitForm />
            </div>
        </div>
    );
}

export default WantToVisit;