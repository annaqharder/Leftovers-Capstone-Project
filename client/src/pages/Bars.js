import React, { useContext, useState, useEffect } from 'react';
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
            <div>
                <h1>My Bars</h1>
            </div>

            <div>
                <EaterySearch
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>

            <button
                type="button"
                className="secondary-button"
                onClick={() => setIsPopupOpen(true)}
            >
                New Bar
            </button>

            <div>
                {isPopupOpen ? (
                    <NewBarForm
                        onClose={() => setIsPopupOpen(false)}
                    />
                ) : null}
            </div>

        {/* <div>
                <div>
                {showForm? (
                    <div>
                        <NewBarForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Bar</button>
                    </div>
                )}
            </div>
        <div>
            {showForm ?
                (<button onClick={() => setShowForm(false)}>Cancel</button>)
            : null}
        </div>
            </div> */}

            <div>
                <BarList
                bars={filteredBars}
                />
            </div>
        </div>
    )
}

export default Bars;