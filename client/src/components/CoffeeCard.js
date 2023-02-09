import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeProvider';

function CoffeeCard({ coffee }) {

    let {coffees, setCoffees} = useContext(CoffeeContext)

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
                <img className="eateryImg" src={coffee.eatery_img}  />
            </div>
            <div>
                <button onClick={() => {window.confirm( `Are you sure you want to delete ${coffee.eatery_name}?`, ) && handleDelete(coffee.id)}}> 
                    Delete 🗑️
                </button>
            </div>
        </div>
    );
}

export default CoffeeCard;