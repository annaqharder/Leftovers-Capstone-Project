import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import VisitEntry from '../components/VisitEntry';


function RestaurantVisits(){

    const { id } = useParams();
    const [eatery, setEatery] = useState({
        eatery_name: "",
        eatery_address: "",
        eatery_neighorhood: "",
        eatery_category: "",
        eatery_type: "",
        visits: []
    })

    // const [eatery, setEatery] = useState([])

    useEffect(() => {
        fetch(`/eateries/${id}`)
            .then((r) => r.json())
            .then((eatery) => (
                setEatery(eatery))
    )}, [])

    console.log(eatery)

    const array = eatery.visits.map((visit) => (
            <VisitEntry
                key={visit.id}
                visit={visit}
            />
    ))

    return (
        <div>
            <h1>{eatery.eatery_name}</h1>
            <h3>{eatery.eatery_address}</h3>

            <h1>{array}</h1>
        </div>
    );
}

export default RestaurantVisits;