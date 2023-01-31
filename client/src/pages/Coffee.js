import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CoffeeContext } from '../context/CoffeeProvider';
import CoffeeList from '../components/CoffeeList';

function Coffee() {

    const { eateries } = useContext(CoffeeContext);
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
                eateries={eateries}
                />
            </div>
        </div>
    );
}

export default Coffee;