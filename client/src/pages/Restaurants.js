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
            <section class="bg-restaurant justify-between pb-80 shadow-xl">
                <div>
                    <div class="text-6xl font-bold p-10 bg-amber-600 bg-opacity-70">
                        <h1 class="font-sans font-family:'Raleway' tracking-tight text-center uppercase text-grey-200">Restaurants</h1>
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
                <div class="text-left pr-14 text-xl">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-lg leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                        type="button"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Add Restaurant
                    </button>
                </div>
            </div>

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