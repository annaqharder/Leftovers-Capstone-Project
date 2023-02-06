import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";
import { FaStar } from 'react-icons/fa'

const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

function VisitEntry({visit}) {

    console.log(visit)

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
        <div>

        <div className="visitCard">
            <div className="visitDetails">
                {date ? (<p> {date} </p>) : null}
                {occasion ? (<p><span className="visitDetailTitles">Occasion:</span> {occasion} </p>) : null}
                {drink ? (<p><span className="visitDetailTitles">Drink:</span> {drink} </p>) : null}
                {appetizer ? ( <p><span className="visitDetailTitles">Appetizer:</span> {appetizer} </p>) : null}
                {food ? (<p><span className="visitDetailTitles">Food: </span>{food} </p>) : null}
                {dessert ? (<p><span className="visitDetailTitles">Dessert:</span> {dessert} </p>) : null}
                {other_consumables ? (<p><span className="visitDetailTitles">Other Consumables:</span> {other_consumables}</p>) : null}
                {notes ? ( <p><span className="visitDetailTitles">Notes:</span> {notes}</p>) : null}
                <div>
                    <p><span className="visitDetailTitles">Rating: </span>{rating} Star</p>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    color={(hoverValue || rating) > index ? colors.orange : colors.grey}
                                />
                            )
                        })}
                </div>
                <div>
                    <img className="visitImg" src={image} />
                </div>
            </div>
            <div>
                <button onClick={() => {window.confirm( `Are you sure you want to delete this visit?`, ) && handleDeleteVisit(visit.id)}}> 
                    Delete 🗑️
                </button>
            </div>

        {showForm ? (
                        <div>
                        <form onSubmit={handleUpdateVisit}>
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
                        <button>Update Visit</button>
                    </form>
                </div>
            ) : (
                <div>
                <button onClick={() => setShowForm(true)}> Update Visit</button>
            </div>
            )}

            <div>
                {showForm ?
                    (<button onClick={() => setShowForm(false)}>Cancel</button>)
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