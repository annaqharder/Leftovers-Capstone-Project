import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';

function Home() {
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    return (
        <>
        </>
    );
}

export default Home;