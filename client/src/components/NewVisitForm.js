import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { VisitContext } from "../context/VisitProvider";

function NewVisitForm() {

    const {user, setUser} = useContext(UserContext);
    const {visits, setVisits} = useContext(VisitContext);
    const { id } = useParams();

    // console.log(visits)

    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [notes, setNotes] = useState("");
    const [drink, setDrink] = useState("");
    const [appetizer, setAppetizer] = useState("");
    const [food, setFood] = useState("");
    const [dessert, setDessert] = useState("");
    const [other_consumables, setOther_consumables] = useState("");
    const [image, setImage] = useState("");
    const [eateryId, setEateryId] = useState("");
    const [userId, setUserId] = useState("")
    const [rating, setRating] = useState("");

    function handleNewVisit(e){
        e.preventDefault();

        const formData = {
            date: date,
            occasion: occasion,
            notes: notes,
            drink: drink,
            appetizer: appetizer,
            food: food,
            dessert: dessert,
            other_consumables: other_consumables,
            visit_img: image,
            eatery_id: id,
            user_id: user.id,
            rating: rating
        }

        fetch(`/visits`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((newVisit) => {
                setVisits((previousVisits) => [...previousVisits, newVisit])
            })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleNewVisit}>

                    <div>
                        <label>Visit Date: </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Visit Occasion: </label>
                        <input
                            type="text"
                            name="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Visit Notes: </label>
                        <input
                            type="text"
                            name="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Drink: </label>
                        <input
                            type="text"
                            name="drinks"
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Appetizer: </label>
                        <input
                            type="text"
                            name="appetizer"
                            value={appetizer}
                            onChange={(e) => setAppetizer(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Food: </label>
                        <input
                            type="text"
                            name="food"
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Dessert: </label>
                        <input
                            type="text"
                            name="dessert"
                            value={dessert}
                            onChange={(e) => setDessert(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Other Food/Drink: </label>
                        <input
                            type="text"
                            name="other_consumables"
                            value={other_consumables}
                            onChange={(e) => setOther_consumables(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Visit Rating: </label>
                        <input
                            type="number"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Visit Images: </label>
                        <input
                            type="images"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <button>Create Visit</button>
                </form>
            </div>
        </div>
    );
}

export default NewVisitForm;