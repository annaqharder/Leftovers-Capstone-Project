import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { RestaurantContext } from '../context/RestaurantProvider';

function NewRestaurantForm({onClose}) {

    let {user} = useContext(UserContext)

    let {setRestaurants} = useContext(RestaurantContext);

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
            eatery_category: "Restaurant",
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
                setRestaurants((prevEateries) => [...prevEateries, newEatery])
            })
            onClose()
    }

return (
        <div className="back-drop">
            <div className="dialog">
            <h1>New Restaurant</h1>
            <form onSubmit={handleNewEatery}>
                <div>
                    <label>Restaurant Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Type: </label>
                    <input
                        type="text"
                        name="eatery_type"
                        placeholder="Modern Chinese, Italian, Mexican, etc..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>

                <div>
                    <label>Restaurant Image: </label>
                    <input
                        type="text"
                        name="eatery_img"
                        value={eateryImg}
                        onChange={(e) => setEateryImg(e.target.value)}
                    />
                </div>

                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Add Restaurant</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default NewRestaurantForm;