import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantList from '../components/RestaurantList';
import NewRestaurantForm from '../components/NewRestaurantForm';
import EaterySearch from '../components/EaterySearch';

function Restaurants() {
    const {restaurants} = useContext(RestaurantContext)
    let history = useHistory();
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [sortBy, setSortBy] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);



    const sortedRestaurants = [...restaurants].sort((restaurant1, restaurant2) => {
        if (sortBy === "Alphabetically") {
            return restaurant1.eatery_name.localeCompare(restaurant2.eatery_name);
        } else if (sortBy === "Neighborhood") {
            return restaurant1.eatery_neighborhood.localeCompare(restaurant2.eatery_neighborhood);
        } else {
            return null
        }
    });

    const filteredEateries = sortedRestaurants
        .filter((restaurant) => {
            return (
                restaurant.eatery_name.toLowerCase().includes(searchQuery.toLowerCase())
                || restaurant.eatery_neighborhood.toLowerCase().includes(searchQuery.toLowerCase())
                || restaurant.eatery_address.toLowerCase().includes(searchQuery.toLowerCase())
                || restaurant.eatery_type.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })

    return (
        <div>
            <section class="flex flex-row-reverse justify-between">
                <div>
                    <div class="text-7xl font-bold p-4 pr-12">
                        <h1 class="tracking-tight text-right uppercase">Restaurants</h1>
                    </div>
                    <div class="text-right pr-14 text-xl">
                        <button
                                class="uppercase p-2 font-bold border-2"
                                type="button"
                                onClick={() => setIsPopupOpen(true)}
                            >
                                ➕ New Restaurant
                        </button>
                    </div>
                </div>
                <div>
                    <div class="p-8">
                        <EaterySearch
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            filterBy={filterBy}
                            setFilterBy={setFilterBy}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                    </div>
                </div>
            </section>

        <section>
            <div>
                {isPopupOpen ? (
                    <NewRestaurantForm
                        onClose={() => setIsPopupOpen(false)}
                    />
                ) : null}
            </div>
            <div>
                <RestaurantList
                restaurants={filteredEateries}
                />
            </div>
        </section>


        </div>
    );
}

export default Restaurants;