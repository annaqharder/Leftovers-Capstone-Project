import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BarContext } from '../context/BarProvider';
import BarList from '../components/BarList';
import NewBarForm from '../components/NewBarForm';

function Bars() {

    const { bars } = useContext(BarContext);
    let history = useHistory();

    return (

        <div>
            <div>
                <h1>My Bars</h1>
                <div>
                    <button>Add Bar</button>
                </div>
            </div>
            <div>
                <BarList
                bars={bars}
                />
            </div>
            <NewBarForm />
        </div>
    )
}

export default Bars;