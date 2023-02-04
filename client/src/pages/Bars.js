import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BarContext } from '../context/BarProvider';
import BarList from '../components/BarList';
import NewBarForm from '../components/NewBarForm';

function Bars() {
    const [showForm, setShowForm] = useState(false)
    const { bars } = useContext(BarContext);
    let history = useHistory();

    return (

        <div>
            <div>
                <h1>My Bars</h1>

                <div>
                {showForm? (
                    <div>
                        <NewBarForm />
                    </div>) : (
                    <div>
                        <button onClick={() => setShowForm(true)}> Add Bar</button>
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
                <BarList
                bars={bars}
                />
            </div>
        </div>
    )
}

export default Bars;