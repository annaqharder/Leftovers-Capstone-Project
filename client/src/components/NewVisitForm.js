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
            <h1 class="text-4xl font-bold py-2 mb-4 text-center uppercase">Add Visit</h1>
            <div>
                    <form onSubmit={handleNewVisit}>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Visit Date: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2" >
                        <label class="text-lg font-bold pr-2">Visit Occasion: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Visit Notes: </label>
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
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Drink: </label>
                        <input
                            class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="drinks"
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Appetizer: </label>
                        <input
                            class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="appetizer"
                            value={appetizer}
                            onChange={(e) => setAppetizer(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Food: </label>
                        <input
                            class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="food"
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Dessert: </label>
                        <input
                            class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="dessert"
                            value={dessert}
                            onChange={(e) => setDessert(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Other Food/Drink: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="other_consumables"
                            value={other_consumables}
                            onChange={(e) => setOther_consumables(e.target.value)}
                        />
                    </div>
                    <div class="flex py-2" >
                        <label class="flex text-lg font-bold pr-2">Visit Rating: </label>
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
                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Visit Images: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="images"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>


                    <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    >
                        Create Visit
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>

                </form>
            </div>
            </div>
        </div>
    );
}

export default NewVisitForm;