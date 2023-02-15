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
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-lg leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out"
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Add Eatery
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