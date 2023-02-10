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
                <h1>Edit Form</h1>
                <form onSubmit={handleEdit}>
                <div>
                    <label>bar Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>bar Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>bar Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div>
                    <label>bar Type: </label>
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

export default EditBarCard;  