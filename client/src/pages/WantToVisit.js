import React, {useState} from 'react';
import WantToVisitForm from '../components/NewWantToVisitForm';
import WantToVisitList from '../components/WantToVisitList';

function WantToVisit() {

    // const [eateries, setEateries] = useState([])

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <div>
                <h1>Eateries I Want To Visit</h1>
            </div>
            <div>
                <WantToVisitList/>
            </div>

            <button
                type="button"
                className="secondary-button"
                onClick={() => setIsPopupOpen(true)}
            >
                Add Eatery
            </button>

            <div>
                {isPopupOpen? (
                    <WantToVisitForm
                        onClose={() => setIsPopupOpen(false)}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default WantToVisit;