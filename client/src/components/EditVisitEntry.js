import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";
import { FaStar } from 'react-icons/fa'

const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

function EditVisitEntry({visit, onClose}) {

    const [error, setError] = useState("");
    const [date, setDate] = useState(visit.date)
    const [occasion, setOccasion] = useState(visit.occasion)
    const [notes, setNotes] = useState(visit.notes)
    const [drink, setDrink] = useState(visit.drink)
    const [appetizer, setAppetizer] = useState(visit.appetizer)
    const [food, setFood] = useState(visit.food)
    const [dessert, setDessert] = useState(visit.dessert)
    const [other_consumables, setOther_consumables] = useState(visit.other_consumables)
    const [rating, setRating] = useState(visit.rating)
    const [image, setImage] = useState(visit.visit_img)

    const {setVisits} = useContext(VisitContext)

    const [hoverValue, setHoverValue] = useState(undefined)

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

    function handleUpdateVisit(e){
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
            rating: rating,
            visit_img: image
        }

        fetch(`/visits/${visit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.ok) {
                res.json().then((updatedData) => {
                    setVisits(updatedData)
                })
            } else {
                res.json().then((error) => setError(error.errors))
            }
        })
        onClose()
    }

    return (
        <div className="back-drop">
                <div className="dialog">
                        <form onSubmit={handleUpdateVisit}>
                        <div>
                            <label>Visit Date: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Visit Occasion: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Visit Notes: </label>
                            <textarea
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
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
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="drinks"
                                value={drink}
                                onChange={(e) => setDrink(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Appetizer: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="appetizer"
                                value={appetizer}
                                onChange={(e) => setAppetizer(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Food: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="food"
                                value={food}
                                onChange={(e) => setFood(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Dessert: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="dessert"
                                value={dessert}
                                onChange={(e) => setDessert(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Other Food/Drink: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
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
                        <button onSubmit={handleUpdateVisit}>Update Visit</button>
                    </div>
                    </form>
                </div>

        </div>
    );
}

export default EditVisitEntry;