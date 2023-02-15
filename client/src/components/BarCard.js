import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { BarContext } from '../context/BarProvider';
import BarStockImg from '../images/bar-stock.jpeg';
import EditBarCard from './EditBarCard';

function BarCard({ bar }) {
    let {bars, setBars} = useContext(BarContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDelete(){
        fetch(`/eateries/${bar.id}`, {
            method: "DELETE"
        })
        deletedBars()
    }

    function deletedBars() {
        const updatedBarList = bars.filter(deletedBar => {
            return deletedBar.id !== bar.id
        })

        setBars(updatedBarList)
    }

    return (
        <div>
            <div class="py-4 mb-6 border-2 rounded hover:shadow-xl">
                <div>
                    <div class="px-4">
                    <div class="flex justify-between items-center">
                        <Link to={`/bars/${bar.id}`} >
                            <h2 class="font-bold text-3xl">{bar.eatery_name}</h2>
                        </Link>
                        <h3 class="font-bold text-xl">{bar.eatery_type}</h3>
                    </div>
                        <h4 class="font-bold text-lg">{bar.eatery_address}</h4>
                        {/* <p>Notes: {bar.eatery_notes}</p> */}
                    </div>
                    {/*
                    <div>
                        <img className="eateryImg" src={BarStockImg} alt="eateryImg"/>
                    </div> */}
                    <div>
                        {isPopupOpen ? (
                            <EditBarCard
                                onClose={() => setIsPopupOpen(false)}
                                bar={bar}
                            />
                        ) : null}
                    </div>
                </div>
                <div class="flex justify-around">
                        <button
                            type="button"
                            class="inline-block px-2 py-2 mt-4 bg-stone-500 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-stone-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out w-1/4"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Edit
                        </button>
                        <button
                        class="inline-block px-2 py-2 mt-4 bg-red-800 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out w-1/4"
                        onClick={() => { window.confirm( `Are you sure you want to delete ${bar.eatery_name}?`, ) && handleDelete(bar.id)}}>
                            Delete
                        </button>
                </div>
            </div>
        </div>
    );
}

export default BarCard;