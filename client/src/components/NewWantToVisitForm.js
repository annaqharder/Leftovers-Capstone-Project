import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { EateryContext } from '../context/EateryProvider';

function WantToVisitForm() {
    let {user} = useContext(UserContext)
    let {setEateries} = useContext(EateryContext);
    const [showForm, setShowForm] = useState(false);
    const history = useHistory()

    const [eateryName, setEateryName] = useState("");
    const [eateryAddress, setEateryAddress] =useState("");
    const [eateryNeighborhood, setEateryNeighborhood] = useState("");
    const [eateryCategory, setEateryCategory] = useState("");
    const [eateryType, setEateryType] = useState("");
    const [haveVisited, setHaveVisited] = useState(false);

    function handleNewEatery(e) {
        e.preventDefault();

        const formData ={
            eatery_name: eateryName,
            eatery_address: eateryAddress,
            eatery_neighborhood: eateryNeighborhood,
            eatery_category: eateryCategory,
            eatery_type: eateryType,
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
    }

return (
        <div>
            <h1>Add Want to Visit</h1>
            <form onSubmit={handleNewEatery}>
                <div>
                    <label>Eatery Name: </label>
                    <input
                        type="text"
                        name="eatery_name"
                        value={eateryName}
                        onChange={(e) => setEateryName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Eatery Address: </label>
                    <input
                        type="text"
                        name="eatery_address"
                        value={eateryAddress}
                        onChange={(e) => setEateryAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label>Eatery Neighborhood: </label>
                    <input
                        type="text"
                        name="eatery_neighborhood"
                        value={eateryNeighborhood}
                        onChange={(e) => setEateryNeighborhood(e.target.value)}
                    />
                </div>

                <div>
                    <label>Eatery Category: </label>
                    <select onChange={(e) => setEateryCategory(e.target.value)}>
                        <option>Select a Category</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Coffee/Cafe">Cafe/Coffee Shop</option>
                        <option value="Bar">Bar</option>
                    </select>
                </div>

                <div>
                    <label>Eatery Type: </label>
                    <input
                        type="text"
                        name="eatery_type"
                        placeholder="Modern Chinese, Italian, Mexican, etc..."
                        value={eateryType}
                        onChange={(e) => setEateryType(e.target.value)}
                    />
                </div>
                <button>Add Eatery</button>
            </form>

        </div>
    );

}

export default WantToVisitForm;