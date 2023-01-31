import { Link } from 'react-router-dom'

function BarCard({ bar }) {
    return (
        <div>
            <div>
                <Link to={`/bars/${bar.id}`} >
                    <h2>{bar.eatery_name}</h2>
                </Link>
                <h3>{bar.eatery_type}</h3>
                <h4>{bar.eatery_address}</h4>
            </div>
        </div>
    );
}

export default BarCard;