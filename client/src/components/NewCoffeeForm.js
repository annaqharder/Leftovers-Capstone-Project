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

                {/* <div>
                    <label>Restaurant Image: </label>
                    <input
                        type="text"
                        name="eatery_img"
                        value={eateryImg}
                        onChange={(e) => setEateryImg(e.target.value)}
                    />
                </div> */}

                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Add Cafe/Coffee Shop</button>
                </div>

            </form>
            </div>
        </div>
    );
}

export default NewEateryForm;