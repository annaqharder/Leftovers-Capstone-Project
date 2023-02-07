import { useState, useEffect, useContext } from 'react';
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

    function handleNewEatery(e) {
        e.preventDefault();

        const formData ={
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: "Bar",
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
                setBars((prevEateries) => [...prevEateries, newEatery])
            })
            onClose()
    }

return (
        <div className="back-drop">
            <div className="dialog">
            <h1>New Bar</h1>
            <form onSubmit={handleNewEatery}>
                <div>
                    <label>Bar Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Bar Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Bar Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>
                <div>
                    <label>Bar Type: </label>
                    <input
                        type="text"
                        name="eatery_type"
                        placeholder="ex: Cocktail, Speakeasy, Dive..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>
                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Add Bar</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default NewEateryForm;