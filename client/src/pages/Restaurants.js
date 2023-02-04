import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantProvider';
import RestaurantList from '../components/RestaurantList';
import NewRestaurantForm from '../components/NewRestaurantForm';

function Restaurants() {

    const { restaurants } = useContext(RestaurantContext)
    let history = useHistory();

    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            <div>
                <h1>My Restaurants</h1>
            </div>
            <div>
                {showForm? (
                    <div>
                        <NewRestaurantForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Restaurant</button>
                    </div>
                )}
            </div>
        <div>
            {showForm ?
                (<button onClick={() => setShowForm(false)}>Cancel</button>)
            : null}
        </div>

            <div>
                <RestaurantList
                restaurants={restaurants}
                />
            </div>

        </div>
    );
}

export default Restaurants;