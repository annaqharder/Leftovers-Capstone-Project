import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import VisitEntry from './VisitEntry';
import NewVisitForm from './NewVisitForm';
import { VisitContext } from '../context/VisitProvider';


function RestaurantVisits(){

    const {visits, setVisits} = useContext(VisitContext)

    const [showForm, setShowForm] = useState(false)

    // console.log(visits[0].eatery.id)

    const { id } = useParams();
    const [eatery, setEatery] = useState({
        eatery_name: "",
        eatery_address: "",
        eatery_neighorhood: "",
        eatery_category: "",
        eatery_type: "",
        visits: []
    })

    useEffect(() => {
        fetch(`/eateries/${id}`)
            .then((r) => r.json())
            .then((eatery) => (
                setEatery(eatery))
    )}, [])

    const filteredVisits = visits.filter((visit) => visit.eatery.id === parseInt(id))
    const mappedVisits = filteredVisits.map((visit) => (
                <VisitEntry
                    key={visit.id}
                    visit={visit}
                />
        ))

    return (
        <div>
            <div>
            {showForm ? (
                <div>
                    <NewVisitForm/>
                </div>
            ) : (
                <div>
                    <button onClick={() => setShowForm(true)}> Add Visit</button>
                </div>
            )}
            </div>

            <div>
                {showForm ?
                    (<button onClick={() => setShowForm(false)}>Cancel</button>)
                : null}
            </div>

            <div>
                <h1>{eatery.eatery_name}</h1>
                <h3>{eatery.eatery_address}</h3>
                <div>{mappedVisits}</div>
            </div>
        </div>
    );
}

export default RestaurantVisits;