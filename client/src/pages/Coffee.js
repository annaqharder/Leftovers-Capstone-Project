import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CoffeeContext } from '../context/CoffeeProvider';
import CoffeeList from '../components/CoffeeList';
import NewCoffeeForm from '../components/NewCoffeeForm';
import EaterySearch from '../components/EaterySearch';

function Coffee() {
    const [showForm, setShowForm] = useState(false);
    const { coffees } = useContext(CoffeeContext);
    let history = useHistory();
    const [sortBy, setSortBy] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filterBy, setFilterBy] = useState("All");
    const [isPopupOpen, setIsPopupOpen] = useState(false);




    const sortedCoffees = [...coffees].sort((coffee1, coffee2) => {
        if (sortBy === "Alphabetically") {
            return coffee1.eatery_name.localeCompare(coffee2.eatery_name);
        } else if (sortBy === "Neighborhood") {
            return coffee1.eatery_neighborhood.localeCompare(coffee2.eatery_neighborhood);
        } else {
            return null
        }
    });

    const filteredCoffees = sortedCoffees
        .filter((coffee) => {
            return (
                coffee.eatery_name.toLowerCase().includes(searchQuery.toLowerCase())
                || coffee.eatery_neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
                || coffee.eatery_address.toLowerCase().includes(searchQuery.toLowerCase())
                || coffee.eatery_type.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })


    return (
        <div>
            <section class="bg-coffee bg-cover justify-between pb-80 shadow-xl">
                <div>
                    <div class="text-6xl font-bold p-10 pr-12 bg-green bg-opacity-80">
                        <h1 class="font-sans font-family:'Raleway' tracking-tight text-center uppercase text-grey-100">Cafes & Coffee Shops</h1>
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
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-lg leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Add Cafe or Coffee Shop
                    </button>
                </div>
            </div>

            <section>
                <div>
                    {isPopupOpen ? (
                        <NewCoffeeForm
                            onClose={() => setIsPopupOpen(false)}
                        />
                    ) : null}
                </div>
                <div>
                    <CoffeeList
                        coffees={filteredCoffees}
                    />
                </div>
            </section>
        </div>


    );
}

export default Coffee;