import React, {useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { VisitContext } from "../context/VisitProvider";

function VisitEntry({visit}) {

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

    return (
        <div>
            <div>
                <p>{visit.date}</p>
                <p>Occasion: {visit.occasion}</p>
                <p>Drink: {visit.drink}</p>
                <p>Appetizer: {visit.appetizer}</p>
                <p>Food: {visit.food}</p>
                <p>Dessert: {visit.dessert}</p>
                <p>Other Consumables: {visit.other_consumables}</p>
                <p>Notes: {visit.notes}</p>
                <p>Rating: {visit.rating} ⭐</p>
            </div>
            <div>
                <button onClick={() => {window.confirm( `Are you sure you want to delete this visit?`, ) && handleDeleteVisit(visit.id)}}> 
                    Delete 🗑️
                </button>
            </div>
        </div>
    );
}

export default VisitEntry;