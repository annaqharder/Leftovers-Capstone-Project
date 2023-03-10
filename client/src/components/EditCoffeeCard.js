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
                <h1 class="font-sans font-family:'Raleway' text-4xl font-bold py-2 mb-4 text-center uppercase">Edit Form</h1>
                <form onSubmit={handleEdit}>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Coffee Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Coffee Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Coffee Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Coffee Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="French Cafe, Bakery, Tea House..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out w-half">
                        Update
                    </button>
                </div>
            </form>
            </div>
            </div>
    );
}

export default EditCoffeeCard;