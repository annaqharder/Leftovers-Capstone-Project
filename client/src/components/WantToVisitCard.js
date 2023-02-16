import React, {useContext, useState} from "react";
import { EateryContext} from "../context/EateryProvider";
import { useHistory } from "react-router-dom";
import BarStockImg from '../images/bar-stock.jpeg';
import CoffeeStockImg from "../images/cafe-stock.jpeg";
import RestaurantStockImg from "../images/restaurant-stock.jpg"

function WantToVisitCard({eatery}) {

    const {setEateries} = useContext(EateryContext)
    const [notes] = useState(eatery.eatery_notes)
    const [haveVisited, setHaveVisited] = useState(eatery.have_visited)

    const [setError] = useState("")
    const history = useHistory()


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
            imagesrc = RestaurantStockImg
        } else if (eatery.eatery_category === "Coffee/Cafe") {
            imagesrc = CoffeeStockImg
        } else if (eatery.eatery_category === "Bar") {
            imagesrc = BarStockImg
        }
    }
    restaurantImg()

    return (
        <div>
            <div class="flex py-4 mb-6 bg-stone-100 bg-opacity-70 border border-stone-300 shadow-lg hover:shadow-2xl rounded">
                <div>
                    <div class="px-4">
                        <h1 class="font-bold text-3xl">{eatery.eatery_name}</h1>
                        <h3 class="font-bold text-xl">{eatery.eatery_category} - {eatery.eatery_type}</h3>
                        <h4 class="font-bold text-lg">{eatery.eatery_address}</h4>
                        {notes ? ( <p><span class="font-bold text-md">Notes:</span> {eatery.eatery_notes}</p>) : null}
                    </div>
                    <form onSubmit={handleUpdate}>
                        <input
                            class="ml-4"
                            type="checkbox"
                            name="have_visited"
                            checked={haveVisited}
                            onChange={(e) => setHaveVisited(e.target.checked)}
                        />
                            <label class="text-lg p-2">Visited?</label>
                            <button
                                class="inline-block px-2 py-2 mt-4 bg-amber-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-amber-800 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out w-1/3"
                            >
                                Update
                            </button>
                    </form>
                </div>
                <div>
                    <img src={imagesrc} className="visitImg"/>
                </div>
            </div>
        </div>
    );
}

export default WantToVisitCard;