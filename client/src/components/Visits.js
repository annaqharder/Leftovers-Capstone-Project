import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import VisitEntry from './VisitEntry';
import NewVisitForm from './NewVisitForm';
import { VisitContext } from '../context/VisitProvider';
import VisitSearch from './VisitSearch';


function Visits(){

    const {visits, setVisits} = useContext(VisitContext)
    const [showForm, setShowForm] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [sortBy, setSortBy] = useState("");


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


        const sortedVisits = [...visits].sort((visit1, visit2) => {
            if (sortBy === "Date") {
                return visit2.date.localeCompare(visit1.date);
            } else if (sortBy === "Occasion") {
                return visit1.occasion.localeCompare(visit2.occasion);
            } else {
                return null
            }
        });

        const searchVisits = sortedVisits
        .filter((visit) => {
            return (
                visit.drink.toLowerCase().includes(searchQuery.toLowerCase())
                || visit.appetizer.toLowerCase().includes(searchQuery.toLowerCase())
                || visit.food.toLowerCase().includes(searchQuery.toLowerCase())
                || visit.dessert.toLowerCase().includes(searchQuery.toLowerCase())
                || visit.other_consumables.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })
        .sort((a, b) => {
            if (sortBy === "") return visits;
            else if (sortBy === "lowest") return a.date - b.date;
            else if (sortBy === "highest") return b.date - a.date;
        })
        .sort((a, b) => {
            if (sortBy === "") return visits;
            else if (sortBy === "lowest") return a.rating - b.rating;
            else if (sortBy === "highest") return b.rating - a.rating;
        })

        const filteredVisits = searchVisits.filter((visit) => visit.eatery.id === parseInt(id))
        const mappedVisits = filteredVisits.map((visit) => (
                    <VisitEntry
                        key={visit.id}
                        visit={visit}
                    />
            ))

    return (
        <div>

            <div>
                <VisitSearch
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>

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

export default Visits;