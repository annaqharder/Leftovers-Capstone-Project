import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CoffeeContext } from '../context/CoffeeProvider';
import CoffeeList from '../components/CoffeeList';
import NewCoffeeForm from '../components/NewCoffeeForm';

function Coffee() {

    const [showForm, setShowForm] = useState(false);
    const { coffees } = useContext(CoffeeContext);
    let history = useHistory();

    return (
        <div>
            <div>
                <h1>My Cafes & Coffee Shops</h1>
                <div>
                {showForm? (
                    <div>
                        <NewCoffeeForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Cafe/Coffee Shop</button>
                    </div>
                )}
            </div>
        <div>
            {showForm ?
                (<button onClick={() => setShowForm(false)}>Cancel</button>)
            : null}
        </div>
            </div>
            <div>
                <CoffeeList
                    coffees={coffees}
                />
            </div>
        </div>
    );
}

export default Coffee;