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
            <div class="flex py-4 mb-6 border-2 hover:shadow-xl">
                <div class="px-4">
                    <Link to={`/bars/${bar.id}`} >
                        <h2 class="font-bold text-3xl">{bar.eatery_name}</h2>
                    </Link>
                    <h3 class="font-bold text-xl">{bar.eatery_type}</h3>
                    <h4 class="font-bold text-xl">{bar.eatery_address}</h4>
                    {/* <p>Notes: {bar.eatery_notes}</p> */}
                    <div class="flex justify-around pt-20">
                        <button
                            type="button"
                            className="secondary-button"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            ✏️ Edit
                        </button>
                        <button
                        onClick={() => { window.confirm( `Are you sure you want to delete ${bar.eatery_name}?`, ) && handleDelete(bar.id)}}>
                            Delete 🗑️
                        </button>
                    </div>
                </div>

                <div>
                    <img className="eateryImg" src={BarStockImg} alt="eateryImg"/>
                </div>

                <div>
                    {isPopupOpen ? (
                        <EditBarCard
                            onClose={() => setIsPopupOpen(false)}
                            bar={bar}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default BarCard;