import React, {useState} from 'react';
import WantToVisitForm from '../components/NewWantToVisitForm';
import WantToVisitList from '../components/WantToVisitList';

function WantToVisit() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <section class="">
                <div>
                    <div class="text-7xl font-bold p-4 pr-12 bg-green bg-opacity-70">
                        <h1 class="font-sans font-family:'Raleway' tracking-tight text-right uppercase text-white">Eateries I Want To Visit</h1>
                    </div>
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
            </section>
        </div>
    );
}

export default WantToVisit;