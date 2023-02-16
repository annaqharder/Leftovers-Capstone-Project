import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { BarContext } from '../context/BarProvider';

function NewEateryForm({onClose}) {

    let {user} = useContext(UserContext)

    let {setBars} = useContext(BarContext)

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
            eatery_category: "Bar",
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
                setBars((prevEateries) => [...prevEateries, newEatery])
            })
            onClose()
    }

return (
        <div className="back-drop">
            <div className="dialog">
            <h1 class="font-sans font-family:'Raleway' text-4xl font-bold py-2 mb-4 text-center uppercase">New Bar</h1>
            <form onSubmit={handleNewEatery}>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Bar Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Bar Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Bar Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Bar Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="ex: Cocktail, Speakeasy, Dive..."
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
                        class="inline-block px-7 py-3 mt-4 bg-red-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-800 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    >
                        Add Bar
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default NewEateryForm;