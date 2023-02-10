import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeProvider';
import CoffeeStockImg from "../images/cafe-stock.jpeg";
import EditCoffeeCard from "./EditCoffeeCard";

function CoffeeCard({ coffee }) {
    let {coffees, setCoffees} = useContext(CoffeeContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleDelete(){
        fetch(`/eateries/${coffee.id}`, {
            method: "DELETE"
        })
        deletedCoffee()
    }

    function deletedCoffee() {
        const updatedCoffeeList = coffees.filter(deletedCoffee => {
            return deletedCoffee.id !== coffee.id
        })

        setCoffees(updatedCoffeeList)
    }

    return (
        <div>
            <div>
                <Link to={`/coffee/cafes/${coffee.id}`} >
                    <h2>{coffee.eatery_name}</h2>
                </Link>
                <h3>{coffee.eatery_type}</h3>
                <h4>{coffee.eatery_address}</h4>
                <img className="eateryImg" src={CoffeeStockImg}  />
            </div>
            <div>
                <button onClick={() => {window.confirm( `Are you sure you want to delete ${coffee.eatery_name}?`, ) && handleDelete(coffee.id)}}> 
                    Delete 🗑️
                </button>
            </div>

            <button
                type="button"
                className="secondary-button"
                onClick={() => setIsPopupOpen(true)}
                >
                    Edit
                </button>

            <div>
                {isPopupOpen ? (
                    <EditCoffeeCard
                        onClose={() => setIsPopupOpen(false)}
                        coffee={coffee}
                    />
                ) : null}
            </div>

        </div>
    );
}

export default CoffeeCard;