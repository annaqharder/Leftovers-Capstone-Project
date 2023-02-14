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
            <section class="bg-bar bg-cover flex justify-between pb-80 shadow-lg">
                <div>
                    <div class="text-9xl font-bold p-2 pr-8 bg-red w-fit bg-opacity-60">
                        <h1 class="tracking-tight text-left uppercase text-white">Bars</h1>
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
                            class="uppercase p-2 font-bold border-2"
                            type="button"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            ➕ New Bar or Brewery
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