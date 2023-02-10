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
                <h1>Edit Form</h1>
                <form onSubmit={handleEdit}>
                <div>
                    <label>Restaurant Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Type: </label>
                    <input
                        type="text"
                        name="eatery_type"
                        placeholder="Modern Chinese, Italian, Mexican, etc..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Update</button>
                </div>
            </form>
            </div>
            </div>
    );
}

export default EditRestaurantCard;