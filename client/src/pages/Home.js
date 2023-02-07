import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';
import RestaurantImg from "../images/restaurant-image.webp";
import CoffeeImg from "../images/coffee-image.jpg";
import BarImg from "../images/Bar-image.webp";
import BarPic from "../images/bar-pic.png"
import CoffeeShop from "../images/coffee-shop.jpeg"
//Home
function Home() {
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    return (
        <div className="homeContainer">
            <div className="imgContainer">
                <h1>Restaurants</h1>
                <img className="homeImg" src={RestaurantImg}/>
            </div>

            <div className="imgContainer">
                <h1>Cafes/Coffee Shops</h1>
                <img className="homeImg" src={CoffeeShop}/>
            </div>

            <div className="imgContainer">
                <h1>Bars</h1>
                <img className="homeImg" src={BarPic}/>
            </div>
        </div>
    );
}

export default Home;