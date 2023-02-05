import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantList from '../components/RestaurantList';
import NewRestaurantForm from '../components/NewRestaurantForm';
import EaterySearch from '../components/EaterySearch';

function Restaurants() {
    const { restaurants } = useContext(RestaurantContext)
    let history = useHistory();
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [showForm, setShowForm] = useState(false)
    const [sortBy, setSortBy] = useState("");


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
            <div>
                <h1>My Restaurants</h1>
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

            <div>
                {showForm? (
                    <div>
                        <NewRestaurantForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Restaurant</button>
                    </div>
                )}
            </div>
        <div>
            {showForm ?
                (<button onClick={() => setShowForm(false)}>Cancel</button>)
            : null}
        </div>

            <div>
                <RestaurantList
                restaurants={filteredEateries}
                />
            </div>

        </div>
    );
}

export default Restaurants;