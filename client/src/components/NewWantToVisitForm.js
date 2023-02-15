import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { EateryContext } from '../context/EateryProvider';

function NewWantToVisitForm({onClose}) {
    let {user} = useContext(UserContext)
    let {setEateries} = useContext(EateryContext);
    const [showForm, setShowForm] = useState(false);
    const history = useHistory()

    const [eateryName, setEateryName] = useState("");
    const [eateryAddress, setEateryAddress] =useState("");
    const [eateryNeighborhood, setEateryNeighborhood] = useState("");
    const [eateryCategory, setEateryCategory] = useState("");
    const [eateryType, setEateryType] = useState("");
    const [eateryNotes, setEateryNotes] = useState("")
    const [haveVisited, setHaveVisited] = useState(false);

    function handleNewEatery(e) {
        e.preventDefault();

        const formData ={
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: eateryCategory,
            eatery_type: eateryType,
            eatery_notes: eateryNotes,
            user_id: user.id,
            have_visited: false
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
                setEateries((prevEateries) => [...prevEateries, newEatery])
            })
        onClose()
    }

return (
        <div className="back-drop">
            <div className="dialog">
            <h1 class="text-4xl font-bold py-2 mb-4 text-center uppercase">Add Eatery</h1>
            <form onSubmit={handleNewEatery}>
                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Eatery Name: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Eatery Address: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Eatery Neighborhood: </label>
                    <input
                        class="indent-2 w-3/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Eatery Category: </label>
                    <select class="indent-2 w-4/6 rounded border border-solid border-gray-300" onChange={(e) => setEateryCategory(e.target.value)}>
                        <option>Select a Category</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Coffee/Cafe">Cafe/Coffee Shop</option>
                        <option value="Bar">Bar</option>
                    </select>
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Eatery Type: </label>
                    <input
                        class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                        type="text"
                        name="eatery_type"
                        placeholder="Chinese, Teahouse, Cocktail Bar, etc..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div class="flex py-2">
                    <label class="text-lg font-bold pr-2">Notes: </label>
                    <textarea
                        class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                        type="textarea"
                        rows="6"
                        cols="40"
                        name="eatery_notes"
                        value={eateryNotes}
                        onChange={(e) => setEateryNotes(e.target.value)}
                    />
                </div>
                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-800 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out w-half"

                    >
                        Add Eatery
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
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

export default NewWantToVisitForm;