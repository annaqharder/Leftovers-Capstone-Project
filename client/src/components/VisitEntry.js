import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";

function VisitEntry({visit}) {

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

    return (
        <div>

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

            <div>
                <p>{date}</p>
                <p>Occasion: {occasion}</p>
                <p>Drink: {drink}</p>
                <p>Appetizer: {appetizer}</p>
                <p>Food: {food}</p>
                <p>Dessert: {dessert}</p>
                <p>Other Consumables: {other_consumables}</p>
                <p>Notes: {notes}</p>
                <p>Images: {image}</p>
                <p>Rating: {rating} ⭐</p>
            </div>
            <div>
                <button onClick={() => {window.confirm( `Are you sure you want to delete this visit?`, ) && handleDeleteVisit(visit.id)}}> 
                    Delete 🗑️
                </button>
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