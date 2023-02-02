import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CoffeeContext } from '../context/CoffeeProvider';
import CoffeeList from '../components/CoffeeList';
import NewCoffeeForm from '../components/NewCoffeeForm';

function Coffee() {

    const { coffees } = useContext(CoffeeContext);
    let history = useHistory();

    return (
        <div>
            <div>
                <h1>My Cafes & Coffee Shops</h1>
                <div>
                    <button>Add Cafe/Coffee Shop</button>
                </div>
            </div>
            <div>
                <CoffeeList
                    coffees={coffees}
                />
            </div>
            <div>
                <NewCoffeeForm />
            </div>
        </div>
    );
}

export default Coffee;