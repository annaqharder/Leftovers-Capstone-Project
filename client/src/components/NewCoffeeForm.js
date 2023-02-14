import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { CoffeeContext } from '../context/CoffeeProvider';

function NewEateryForm({onClose}) {

    let {user} = useContext(UserContext)

    let {setCoffees} = useContext(CoffeeContext)

    const [eateryName, setEateryName] = useState("");
    const [eateryAddress, setEateryAddress] =useState("");
    const [eateryNeighborhood, setEateryNeighborhood] = useState("");
    const [eateryType, setEateryType] = useState("");
    const [eateryImg, setEateryImg] = useState("")

    function handleNewEatery(e) {
        e.preventDefault();

        const formData ={
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Coffee/Cafe",
            eatery_type: eateryType,
            user_id: user.id,
            have_visited: true,
            eatery_img: eateryImg
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
            onClose()
    }

return (
        <div className="back-drop">
            <div className="dialog">
            <h1 class="text-4xl font-bold py-2 mb-4 text-center uppercase">New Cafe/Coffee Shop</h1>
            <form onSubmit={handleNewEatery}>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Cafe Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Cafe Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Cafe Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Cafe Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="ex: Drive Thru, French Cafe, Tea House..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                {/* <div>
                    <label>Restaurant Image: </label>
                    <input
                        type="text"
                        name="eatery_img"
                        value={eateryImg}
                        onChange={(e) => setEateryImg(e.target.value)}
                    />
                </div> */}

                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    >
                        Add Cafe/Coffee Shop
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

export default NewEateryForm;