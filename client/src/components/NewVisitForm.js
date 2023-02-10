import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { VisitContext } from "../context/VisitProvider";
import { FaStar } from 'react-icons/fa'


const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

function NewVisitForm({onClose}) {

    const {user, setUser} = useContext(UserContext);
    const {visits, setVisits} = useContext(VisitContext);
    const { id } = useParams();
    const [hoverValue, setHoverValue] = useState(undefined)

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
            onClose()
    }

    const stars = Array(5).fill(0)

    const handleClickStar = value => {
        setRating(value)
    };

    const handleMouseOverStar = value => {
        setHoverValue(value)
    };

    const handleMouseLeaveStar = () => {
        setHoverValue(undefined)
    }

    return (
        <div className="back-drop">
            <div className="dialog">
            <h1>Add Visit</h1>
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
                        <textarea
                            type="textarea"
                            rows="6"
                            cols="40"
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
                        {stars.map((_, index) => {
                                return (
                                    <FaStar
                                        className="stars"
                                        key={index}
                                        size={24}
                                        value={rating}
                                        onChange={(e) => setRating(e.target.value)}
                                        color={(hoverValue || rating) > index ? colors.orange : colors.grey}
                                        onClick={() => handleClickStar(index + 1)}
                                        onMouseOver={() => handleMouseOverStar(index + 1)}
                                        onMouseLeave={() => handleMouseLeaveStar}
                                    />
                                )
                            })}
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

                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Create Visit</button>
                </div>

                </form>
            </div>
            </div>
        </div>
    );
}

export default NewVisitForm;