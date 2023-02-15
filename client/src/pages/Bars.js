import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BarContext } from '../context/BarProvider';
import BarList from '../components/BarList';
import NewBarForm from '../components/NewBarForm';
import EaterySearch from '../components/EaterySearch';

function Bars() {
    const [showForm, setShowForm] = useState(false)
    const { bars } = useContext(BarContext);
    let history = useHistory();
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [sortBy, setSortBy] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const sortedBars = [...bars].sort((bar1, bar2) => {
        if (sortBy === "Alphabetically") {
            return bar1.eatery_name.localeCompare(bar2.eatery_name);
        } else if (sortBy === "Neighborhood") {
            return bar1.eatery_neighborhood.localeCompare(bar2.eatery_neighborhood);
        } else {
            return null
        }
    });

    const filteredBars = sortedBars
        .filter((bar) => {
            return (
                bar.eatery_name.toLowerCase().includes(searchQuery.toLowerCase())
                || bar.eatery_neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
                || bar.eatery_address.toLowerCase().includes(searchQuery.toLowerCase())
                || bar.eatery_type.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })

    return (
        <div>
            <section class="bg-bar bg-cover justify-between pb-80 shadow-xl">
                <div>
                    <div class="text-6xl font-bold p-10 pr-12 bg-red-800 bg-opacity-70">
                        <h1 class="font-sans font-family:'Raleway' tracking-tight text-center uppercase text-grey-100">Bars</h1>
                    </div>
                </div>
            </section>

            <div class="flex justify-between">
                <div class="py-3 px-8">
                    <EaterySearch
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filterBy={filterBy}
                        setFilterBy={setFilterBy}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </div>
                <div class="text-right pt-4 pr-14 text-xl">
                        <button
                            class="inline-block px-7 py-3 mt-4 bg-stone-500 text-white font-bold text-lg leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                            type="button"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Add Bar
                        </button>
                </div>
            </div>

            <section>
                <div>
                    {isPopupOpen ? (
                        <NewBarForm
                            onClose={() => setIsPopupOpen(false)}
                        />
                    ) : null}
                </div>
                <div>
                    <BarList
                    bars={filteredBars}
                    />
                </div>
            </section>
        </div>
    )
}

export default Bars;