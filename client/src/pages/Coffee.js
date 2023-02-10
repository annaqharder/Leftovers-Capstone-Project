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
            <div>
                <h1>My Cafes & Coffee Shops</h1>
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
                New Cafe/Coffee Shop
            </button>

            <div>
                {isPopupOpen ? (
                    <NewCoffeeForm
                        onClose={() => setIsPopupOpen(false)}
                    />
                ) : null}
            </div>

            <div className="coffeeContainer">
                <div>
                </div>
                <div>
                <CoffeeList
                    coffees={filteredCoffees}
                />
            </div>
            </div>
        <div>

            {/* <div>
                {showForm? (
                    <div>
                        <NewCoffeeForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Cafe/Coffee Shop</button>
                    </div>
                )}
            </div>
        <div>
            {showForm ?
                (<button onClick={() => setShowForm(false)}>Cancel</button>)
            : null}
        </div> */}
            </div>


        </div>
    );
}

export default Coffee;