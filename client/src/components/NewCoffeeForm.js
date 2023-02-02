import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { CoffeeContext } from '../context/CoffeeProvider';
import { RestaurantContext } from '../context/RestaurantProvider';

function NewEateryForm() {

    let {user} = useContext(UserContext)

    let {setCoffees} = useContext(CoffeeContext)

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
            eatery_category: "Coffee/Cafe",
            eatery_type: eateryType,
            user_id: user.id
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
                setCoffees((prevEateries) => [...prevEateries, newEatery])
            })
    }

return (
        <div>
            <h1>New Cafe/Coffee Shop</h1>
            <form onSubmit={handleNewEatery}>
                <div>
                    <label>Cafe/Coffee Shop Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Cafe/Coffee Shop Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Cafe/Coffee Shop Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>
                <div>
                    <label>Cafe/Coffee Shop Type: </label>
                    <input
                        type="text"
                        name="eatery_type"
                        placeholder="Drive Thru, French Cafe, Tea House..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>
                <button>Add Cafe/Coffee Shop</button>
            </form>

        </div>
    );
}

export default NewEateryForm;