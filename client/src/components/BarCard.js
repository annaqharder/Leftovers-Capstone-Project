import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BarContext } from '../context/BarProvider';

function BarCard({ bar }) {

    let {bars, setBars} = useContext(BarContext)

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
            <div>
                <Link to={`/bars/${bar.id}`} >
                    <h2>{bar.eatery_name}</h2>
                </Link>
                <h3>{bar.eatery_type}</h3>
                <h4>{bar.eatery_address}</h4>
                <div>
                    <button
                    onClick={() => { window.confirm( `Are you sure you want to delete ${bar.eatery_name}?`, ) && handleDelete(bar.id)}}>
                        Delete 🗑️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BarCard;