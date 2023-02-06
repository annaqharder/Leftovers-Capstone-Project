import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { RestaurantContext } from '../context/RestaurantProvider';

function NewRestaurantForm() {

    let {user} = useContext(UserContext)

    let {setRestaurants} = useContext(RestaurantContext);

    const [showForm, setShowForm] = useState(false)

    const [eateryName, setEateryName] = useState("");
    const [eateryAddress, setEateryAddress] =useState("");
    const [eateryNeighborhood, setEateryNeighborhood] = useState("");
    const [eateryType, setEateryType] = useState("");

    function handleNewEatery(e) {
        e.preventDefault();

        const formData ={
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Restaurant",
            eatery_type: eateryType,
            user_id: user.id,
            have_visited: true
        }

        fetch(`/eateries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((newEatery) => {
                setRestaurants((prevEateries) => [...prevEateries, newEatery])
            })
    }

return (
        <div>
            <h1>New Restaurant</h1>
            <form onSubmit={handleNewEatery}>
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
                <button>Add Restaurant</button>
            </form>

        </div>
    );
}

export default NewRestaurantForm;