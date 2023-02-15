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
            <div class="flex py-4 mb-6 border-2 hover:shadow-xl">
                <div class="px-4">
                    <Link to={`/coffee/cafes/${coffee.id}`} >
                        <h2 class="font-bold text-3xl">{coffee.eatery_name}</h2>
                    </Link>
                    <h3 class="font-bold text-xl">{coffee.eatery_type}</h3>
                    <h4 class="font-bold text-lg">{coffee.eatery_address}</h4>
                    <div class="flex justify-around pt-24">
                        <button
                            type="button"
                            class="inline-block px-2 py-2 mt-4 bg-tan text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-1/3"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Edit
                        </button>
                        <button
                        class="inline-block px-2 py-2 mt-4 bg-tan text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-1/3"
                        onClick={() => {window.confirm( `Are you sure you want to delete ${coffee.eatery_name}?`, ) && handleDelete(coffee.id)}}> 
                            Delete
                        </button>
                    </div>
                </div>
                <div>
                    <img className="eateryImg" src={CoffeeStockImg}  />
                </div>
                <div>
                {isPopupOpen ? (
                    <EditCoffeeCard
                        onClose={() => setIsPopupOpen(false)}
                        coffee={coffee}
                    />
                ) : null}
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;