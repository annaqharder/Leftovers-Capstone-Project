import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import VisitEntry from './VisitEntry';
import NewVisitForm from './NewVisitForm';
import { VisitContext } from '../context/VisitProvider';
import VisitSearch from './VisitSearch';


function Visits(){

    const {visits, setVisits} = useContext(VisitContext)
    const [searchQuery, setSearchQuery] = useState("")
    const [filterBy, setFilterBy] = useState("All")
    const [sortBy, setSortBy] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { id } = useParams();
    const [eatery, setEatery] = useState({
        eatery_name: "",
        eatery_address: "",
        eatery_neighorhood: "",
        eatery_category: "",
        eatery_type: "",
        eatery_notes: "",
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

        <div class="flex justify-between m-4">
            <div class="ml-6">
                <h1 class="font-bold text-6xl">{eatery.eatery_name}</h1>
                <h3 class="font-bold text-2xl">{eatery.eatery_address}</h3>
                <p class="font-bold text-md"> {eatery.eatery_notes} </p>
            </div>
            <div class="text-right pt-4 pr-14 text-xl">
                <button
                    class="inline-block px-4 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-full"
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                >
                    Add New Visit
                </button>
                <div>
                    {isPopupOpen ? (
                        <NewVisitForm
                            onClose={() => setIsPopupOpen(false)}
                        />
                    ) : null}
                </div>
            </div>
        </div>

            <section class="flex grid-cols-2 m-8">
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
                <div class="w-2/3 ml-24 ">{mappedVisits}</div>
            </section>

        </div>
    );
}

export default Visits;