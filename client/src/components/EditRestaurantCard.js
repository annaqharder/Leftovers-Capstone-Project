import { useContext, useState } from 'react';
import { RestaurantContext } from '../context/RestaurantProvider';
import { UserContext } from '../context/UserProvider';

function EditRestaurantCard({restaurant, onClose}) {
    let {user} = useContext(UserContext)
    let {restaurants, setRestaurants} = useContext(RestaurantContext)

    const [eateryName, setEateryName] = useState(restaurant.eatery_name);
    const [eateryAddress, setEateryAddress] =useState(restaurant.eatery_address);
    const [eateryNeighborhood, setEateryNeighborhood] = useState(restaurant.eatery_neighborhood);
    const [eateryType, setEateryType] = useState(restaurant.eatery_type);

    // function editedArray(updatedEatery) {
    //     setRestaurants((prev) => {
    //         const filtered = prev.filter(
    //             (restaurant) => restaurant.id !== updatedEatery.id
    //         )
    //         return [...filtered, updatedEatery]
    //     })
    // }

    function editedArray(updatedEatery){
        const updatedArray = restaurants.map((eatery) => {
            if(eatery.id === updatedEatery.id) {
                return updatedEatery
            } else {
                return eatery
            }
        })
        setRestaurants(updatedArray)
    }

    function handleEdit(e){
        e.preventDefault();

        const formData = {
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Restaurant",
            eatery_type: eateryType,
            user_id: user.id,
        }

        fetch(`/eateries/${restaurant.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((updatedData) => editedArray(updatedData))

            onClose()
    }

    return (
            <div className="back-drop">
                <div className="dialog">
                <h1 class="text-4xl font-bold py-2 mb-4 text-center uppercase">Edit Form</h1>
                <form onSubmit={handleEdit}>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Restaurant Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Restaurant Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Restaurant Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Restaurant Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="Modern Chinese, Italian, Mexican, etc..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    >
                        Update
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            </div>
            </div>
    );
}

export default EditRestaurantCard;