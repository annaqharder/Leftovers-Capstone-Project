import { useContext, useState } from 'react';
import { BarContext } from '../context/BarProvider';
import { UserContext } from '../context/UserProvider';

function EditBarCard({bar, onClose}) {
    let {user} = useContext(UserContext)
    let {bars, setBars} = useContext(BarContext)

    const [eateryName, setEateryName] = useState(bar.eatery_name);
    const [eateryAddress, setEateryAddress] =useState(bar.eatery_address);
    const [eateryNeighborhood, setEateryNeighborhood] = useState(bar.eatery_neighborhood);
    const [eateryType, setEateryType] = useState(bar.eatery_type);

    // function editedArray(updatedEatery) {
    //     setbars((prev) => {
    //         const filtered = prev.filter(
    //             (bar) => bar.id !== updatedEatery.id
    //         )
    //         return [...filtered, updatedEatery]
    //     })
    // }

    function editedArray(updatedEatery){
        const updatedArray = bars.map((eatery) => {
            if(eatery.id === updatedEatery.id) {
                return updatedEatery
            } else {
                return eatery
            }
        })
        setBars(updatedArray)
    }

    function handleEdit(e){
        e.preventDefault();

        const formData = {
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Bar",
            eatery_type: eateryType,
            user_id: user.id,
        }

        fetch(`/eateries/${bar.id}`, {
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
                <div class="flex p-2">
                    <label class="text-lg font-bold pr-2">Bar Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex p-2">
                    <label class="text-lg font-bold pr-2">Bar Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex p-2">
                    <label class="text-lg font-bold pr-2">Bar Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div class="flex p-2">
                    <label class="text-lg font-bold pr-2">Bar Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="Cocktail, Distillery, Speakeasy ..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-800 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half" 
                        onClick={onClose}>
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

export default EditBarCard;