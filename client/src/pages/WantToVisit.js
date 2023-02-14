import React, {useState} from 'react';
import WantToVisitForm from '../components/NewWantToVisitForm';
import WantToVisitList from '../components/WantToVisitList';

function WantToVisit() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <div>
                <h1>Eateries I Want To Visit</h1>
            </div>

            <div class="text-right pt-4 pr-14 text-xl">
                <button
                    class="uppercase p-2 font-bold border-2"
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                >
                    ➕ Add Eatery
                </button>
            </div>

            <div>
                <WantToVisitList/>
            </div>



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