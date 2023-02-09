import React, {useContext, useState} from "react";
import { EateryContext} from "../context/EateryProvider";
import { useHistory } from "react-router-dom";
import RestaurantStock from "../images/restaurant-stock.jpg";
import CafeStock from "../images/cafe-stock.jpeg";
import BarStock from "../images/bar-stock.jpeg"

function WantToVisitCard({eatery}) {

    const {setEateries} = useContext(EateryContext)
    const [notes] = useState(eatery.eatery_notes)

    const [setError] = useState("")
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

    let imagesrc = ""
    function restaurantImg(){
        if (eatery.eatery_img) {
            imagesrc = eatery.eatery_img
        } else if (eatery.eatery_category === "Restaurant") {
            imagesrc = RestaurantStock
        } else if (eatery.eatery_category === "Coffee/Cafe") {
            imagesrc = CafeStock
        } else if (eatery.eatery_category === "Bar") {
            imagesrc = BarStock
        }
    }
    restaurantImg()

    return (
        <div>
            <div>
                <h1>{eatery.eatery_name}</h1>
                <h3>{eatery.eatery_category} - {eatery.eatery_type}</h3>
                <h4>{eatery.eatery_address}</h4>
                {notes ? ( <p><span>Notes:</span> {eatery.eatery_notes}</p>) : null}
                <img src={imagesrc} className="visitImg"/>
            </div>

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