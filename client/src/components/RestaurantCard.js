import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantStockImg from "../images/restaurant-stock.jpg";
import EditRestaurantCard from './EditRestaurantCard';


function RestaurantCard({ restaurant }) {
    let {restaurants, setRestaurants} = useContext(RestaurantContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDelete(){
        fetch(`/eateries/${restaurant.id}`, {
            method: "DELETE"
        })
        deletedRestaurant()
    }

    function deletedRestaurant() {
        const updatedRestaurantList = restaurants.filter(deletedRestaurant => {
            return deletedRestaurant.id !== restaurant.id
        })
        setRestaurants(updatedRestaurantList)
    }

    return (
        <div>
            <div class="py-4 mb-6 bg-stone-100 bg-opacity-70 border border-stone-300 rounded shadow-lg hover:shadow-2xl ">
                <div>
                    <div class="px-4">
                        <div class="flex justify-between items-center">
                            <Link to={`/restaurants/${restaurant.id}`} >
                                <h2 class="font-bold text-3xl no-underline hover:underline">{restaurant.eatery_name}</h2>
                            </Link>
                            <h3 class="font-bold text-xl">{restaurant.eatery_type}</h3>
                        </div>
                        <h4 class="font-bold text-lg">{restaurant.eatery_address}</h4>
                        {/* <p>Notes: {restaurant.eatery_notes}</p> */}
                    </div>

                    {/* <div>
                        <img class="w-80" className="eateryImg" src={RestaurantStockImg} alt="eateryImg"/>
                    </div> */}

                    <div>
                        {isPopupOpen ? (
                            <EditRestaurantCard
                                onClose={() => setIsPopupOpen(false)}
                                restaurant={restaurant}
                            />
                        ) : null}
                    </div>
                </div>
                <div class="flex justify-around">
                        <button
                        type="button"
                        class="inline-block px-2 py-2 mt-4 bg-stone-500 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out w-1/4"
                        onClick={() => setIsPopupOpen(true)}
                        >
                            Edit
                        </button>
                        <button
                        class="inline-block px-2 py-2 mt-4 bg-amber-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-amber-800 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out w-1/4"
                        onClick={() => { window.confirm( `Are you sure you want to delete ${restaurant.eatery_name}?`, ) && handleDelete(restaurant.id)}}>
                            Delete
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default RestaurantCard;