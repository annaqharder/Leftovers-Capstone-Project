import { Link } from 'react-router-dom'

function CoffeeCard({ coffee }) {
    return (
        <div>
            <div>
                <Link to={`/coffee-shops/${coffee.eatery_name}`} >
                    <h2>{coffee.eatery_name}</h2>
                </Link>
                <h3>{coffee.eatery_type}</h3>
                <h4>{coffee.eatery_address}</h4>
            </div>
        </div>
    );
}

export default CoffeeCard;