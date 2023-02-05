import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';

function Home() {
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    return (
        <div>
            <div>
                <h1>Restaurants</h1>

            </div>

            <div>
                <h1>Cafes/Coffee Shops</h1>
            </div>

            <div>
                <h1>Bars</h1>
            </div>
        </div>
    );
}

export default Home;