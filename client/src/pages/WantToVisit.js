import React, {useContext, useState} from 'react';
import WantToVisitForm from '../components/NewWantToVisitForm';
import WantToVisitList from '../components/WantToVisitList';
import WantToVisitSearch from '../components/WantToVisitSearch';
import { EateryContext } from '../context/EateryProvider';

function WantToVisit() {
    const {eateries} = useContext(EateryContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [sortBy, setSortBy] = useState("");

    const sortedEateries = [...eateries].sort((eatery1, eatery2) => {
        if (sortBy === "Alphabetically") {
            return eatery1.eatery_name.localeCompare(eatery2.eatery_name);
        } else if (sortBy === "Neighborhood") {
            return eatery1.eatery_neighborhood.localeCompare(eatery2.eatery_neighborhood);
        } else {
            return null
        }
    });

    const filteredEateries = sortedEateries.filter((eatery) => {
        if (filterBy === "All") return true;
        return (eatery.eatery_category.toLowerCase()) === filterBy.toLowerCase()});

    const searchEateries = filteredEateries
    .filter((eatery) => {
        return (
            eatery.eatery_name.toLowerCase().includes(searchQuery.toLowerCase())
            || eatery.eatery_neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
            || eatery.eatery_address.toLowerCase().includes(searchQuery.toLowerCase())
            || eatery.eatery_type.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })

    return (
        <div>
            <section class="">
                <div>
                    <div class="text-7xl font-bold p-4 pr-12 bg-amber-700 bg-opacity-70">
                        <h1 class="font-sans font-family:'Raleway' tracking-tight text-right uppercase text-white">Eateries I Want To Visit</h1>
                    </div>
                </div>

            <div>
                <div>
                    <WantToVisitSearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filterBy={filterBy}
                        setFilterBy={setFilterBy}
                        sortBy={sortBy}
                        setSortBy={setSortBy}/>
                </div>

                <div class="text-right pr-14 text-xl">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-lg leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out"
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Add Eatery
                    </button>
                </div>
            </div>

                <div>
                    <WantToVisitList
                        eateries={searchEateries}/>
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