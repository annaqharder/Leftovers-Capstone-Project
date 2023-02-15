import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";
import { FaStar } from 'react-icons/fa'

function VisitEntry({visit}) {

    const colors = {
        orange: "#F2C265",
        grey: "a9a9a9"
    }

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

    const [hoverValue, setHoverValue] = useState(undefined)
    const [showForm, setShowForm] = useState(false)

    let {visits, setVisits} = useContext(VisitContext)

    const formattedDate = new Date(date).toLocaleString("en-US", {
        day: "numeric",
        year: "numeric",
        month: "long",
    })

    function editVisit(editedVisit){
        let updatedVisit = visits.map((visit) => {
            if (visit.id === editVisit.id) {
                return editedVisit;
            } else {
                return visit
            }
        });
        setVisits(updatedVisit)
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
                res.json().then((data) => {
                    editVisit(data)
                })
            } else {
                res.json().then((error) => setError(error.errors))
            }
        })
        setShowForm(false)
    }

    function handleDeleteVisit(){
        fetch(`/visits/${visit.id}`, {
            method: "DELETE"
        })
        deletedVisit()
    }

    function deletedVisit() {
        const updatedVisitList = visits.filter(deletedVisit => {
            return deletedVisit.id !== visit.id
        })
        setVisits(updatedVisitList)
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
        <div class="my-4 border rounded px-6 py-3 shadow-lg hover:shadow-2xl">
        <div>
            <div>
                <div class="flex justify-between items-center">
                    {date ? (<h2 class="font-sans font-family:'Raleway' text-3xl font-semibold "> {formattedDate} </h2>) : null}
                    {occasion ? (<p class="text-lg mr-4"><span class="font-semibold uppercase">Occasion:</span> {occasion} </p>) : null}
                </div>
                <div class="flex py-2">
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    className="stars"
                                    key={index}
                                    size={24}
                                    color={(hoverValue || rating) > index ? colors.orange : colors.grey}
                                />
                            )
                        })}
                    <p class="mx-2">({rating} Stars)</p>
                </div>

                {drink ? (<p><span class="text-lg font-semibold uppercase">Drink:</span> {drink} </p>) : null}
                {appetizer ? ( <p><span class="text-lg font-semibold uppercase">Appetizer:</span> {appetizer} </p>) : null}
                {food ? (<p><span class="text-lg font-semibold uppercase">Food: </span>{food} </p>) : null}
                {dessert ? (<p><span class="text-lg font-semibold uppercase">Dessert:</span> {dessert} </p>) : null}
                {other_consumables ? (<p><span class="text-lg font-semibold uppercase">Other Consumables:</span> {other_consumables}</p>) : null}
                {notes ? ( <p><span class="text-lg font-semibold uppercase">Notes:</span> {notes}</p>) : null}

                <div>
                    {image ? (<img className="visitImg" src={image} />) : null}
                </div>
            </div>

            <div class="flex justify-between">

            {showForm ? (
                        <div>
                        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                        <form onSubmit={handleUpdateVisit}>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Visit Date: </label>
                            <input
                                class="indent-2 w-6/6 rounded border border-solid border-gray-300"
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg bold pr-2">Visit Occasion: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="occasion"
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            />
                        </div>
                        <div >
                            <label class="font-sans font-family:'Raleway' text-lg  pr-2">Visit Notes: </label>
                            <textarea
                                class="indent-2 w-/6 rounded border border-solid border-gray-300"
                                type="textarea"
                                rows="4"
                                cols="40"
                                name="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Drink: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="drinks"
                                value={drink}
                                onChange={(e) => setDrink(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Appetizer: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="appetizer"
                                value={appetizer}
                                onChange={(e) => setAppetizer(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Food: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="food"
                                value={food}
                                onChange={(e) => setFood(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Dessert: </label>
                            <input
                                class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="dessert"
                                value={dessert}
                                onChange={(e) => setDessert(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Other Food & Drink: </label>
                            <input
                                class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                                type="text"
                                name="other_consumables"
                                value={other_consumables}
                                onChange={(e) => setOther_consumables(e.target.value)}
                            />
                        </div>
                        <div class="flex py-2">
                            <label class="font-sans font-family:'Raleway' text-lg pr-2">Visit Rating: </label>
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
                        {/* <div>
                            <label>Visit Images: </label>
                            <input
                                type="images"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div> */}
                        <button
                            class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        >Update Visit</button>
                    </form>
                </div>
            ) : (
                <div>
                <button
                    class="inline-block px-7 py-3 mt-4 bg-stone-600 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    onClick={() => setShowForm(true)}> Edit Visit</button>
            </div>
            )}
            <div>
                <button
                    onClick={() => {window.confirm( `Are you sure you want to delete this visit?`, ) && handleDeleteVisit(visit.id)}}
                    class="inline-block px-7 py-3 mt-4 bg-red-800 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-900 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                >
                    Delete
                </button>
            </div>
        </div>

            <div>
                {showForm ?
                    (<button
                        class="inline-block px-7 py-3 mt-4 bg-red-800 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-900 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={() => setShowForm(false)}>Cancel</button>)
                : null}
            </div>

        </div>


            <div>
            {error
            ? error.map((err) => (
                <div>
                    {err}
                </div>
            ))
            : null}
            </div>
        </div>
    );
}

export default VisitEntry;