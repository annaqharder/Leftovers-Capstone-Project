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
            <div class="py-4 mb-6 border border-stone-300 rounded shadow-xl hover:shadow-2xl ">
                <div class="px-4">
                <div class="flex justify-between items-center">
                    <Link to={`/coffee/cafes/${coffee.id}`} >
                        <h2 class="font-bold text-3xl">{coffee.eatery_name}</h2>
                    </Link>
                    <h3 class="font-bold text-xl">{coffee.eatery_type}</h3>
                </div>
                    <h4 class="font-bold text-lg">{coffee.eatery_address}</h4>
                </div>
                {/* <div>
                    <img className="eateryImg" src={CoffeeStockImg}  />
                </div> */}
                <div>
                {isPopupOpen ? (
                    <EditCoffeeCard
                        onClose={() => setIsPopupOpen(false)}
                        coffee={coffee}
                    />
                ) : null}
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
                    class="inline-block px-2 py-2 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-emerald-900 hover:shadow-lg focus:bg-emerald-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-900 active:shadow-lg transition duration-150 ease-in-out w-1/4"
                    onClick={() => {window.confirm( `Are you sure you want to delete ${coffee.eatery_name}?`, ) && handleDelete(coffee.id)}}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;