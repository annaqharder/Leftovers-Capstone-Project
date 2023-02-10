import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeProvider';
import { UserContext } from '../context/UserProvider';

function EditCoffeeCard({coffee, onClose}) {
    let {user} = useContext(UserContext)
    let {coffees, setCoffees} = useContext(CoffeeContext)

    const [eateryName, setEateryName] = useState(coffee.eatery_name);
    const [eateryAddress, setEateryAddress] =useState(coffee.eatery_address);
    const [eateryNeighborhood, setEateryNeighborhood] = useState(coffee.eatery_neighborhood);
    const [eateryType, setEateryType] = useState(coffee.eatery_type);

    // function editedArray(updatedEatery) {
    //     setCoffees((prev) => {
    //         const filtered = prev.filter(
    //             (coffee) =>  coffee.id !== updatedEatery.id
    //         )
    //         return [...filtered, updatedEatery]
    //     })
    // }

    function editedArray(updatedEatery){
        const updatedArray = coffees.map((eatery) => {
            if(eatery.id === updatedEatery.id) {
                return updatedEatery
            } else {
                return eatery
            }
        })
        setCoffees(updatedArray)
    }

    function handleEdit(e){
        e.preventDefault();

        const formData = {
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Coffee/Cafe",
            eatery_type: eateryType,
            user_id: user.id,
        }

        fetch(`/eateries/${coffee.id}`, {
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
                    <label>Coffee Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Coffee Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Coffee Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div>
                    <label>Coffee Type: </label>
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

export default EditCoffeeCard;