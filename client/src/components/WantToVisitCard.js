import React, {useContext, useState} from "react";
import { EateryContext } from "../context/EateryProvider";
import { useHistory } from "react-router-dom";

function WantToVisitCard({eatery}) {

    const {setEateries} = useContext(EateryContext)
    const [error, setError] = useState("")
    const history = useHistory()

    const [haveVisited, setHaveVisited] = useState(eatery.have_visited)

    function handleUpdate(e){
        e.preventDefault();

        fetch(`/eateries/${eatery.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({have_visited: haveVisited})
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setEateries(data)
                })
            } else {
                res.json().then((error) => setError(error.errors))
            }
        })

        history.push(`/all-${eatery.eatery_category}s`)

    }

    return (
        <div>
            <h1>{eatery.eatery_name}</h1>
            <h3>{eatery.eatery_category} - {eatery.eatery_type}</h3>
            <h4>{eatery.eatery_address}</h4>
            <form onSubmit={handleUpdate}>
                <input
                    type="checkbox"
                    name="have_visited"
                    checked={haveVisited}
                    onChange={(e) => setHaveVisited(e.target.checked)}
                />
                    <label>Visited?</label>
                    <button>Update</button>
            </form>
        </div>
    );
}

export default WantToVisitCard;