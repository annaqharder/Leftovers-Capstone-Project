import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";
import { FaStar } from 'react-icons/fa'
import EditVisitEntry from "./EditVisitEntry";

const colors = {
    orange: "#F2C265",
    grey: "a9a9a9"
}

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
    const [hoverValue, setHoverValue] = useState(undefined)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    let {visits, setVisits} = useContext(VisitContext)


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

    const stars = Array(5).fill(0)


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

            <button
                type="button"
                className="secondary-button"
                onClick={() => setIsPopupOpen(true)}
            >
                Edit Visit
            </button>

            <div>
                {isPopupOpen ? (
                    <EditVisitEntry
                        visit={visit}
                        onClose={() => setIsPopupOpen(false)}
                        editVisit={editVisit}
                    />
                ) : null}
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