import React, { useContext, useEffect, useState, useMemo } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';
// import RestaurantImg from "../images/restaurant-image.webp";
// import CoffeeImg from "../images/coffee-image.jpg";
// import BarImg from "../images/Bar-image.webp";
// import BarPic from "../images/bar-pic.png"
// import CoffeeShop from "../images/coffee-shop.jpeg";

function Home() {
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    const restaurantImgArray = ["/images/restaurant1.webp","/images/restaurant2.webp", "/images/restaurant3.webp", "/images/restaurant4.webp", "/images/restaurant5.webp", "/images/restaurant6.webp", "/images/restaurant7.webp"]

    const [imageIndex, setImageIndex] = useState(0);

    useMemo(() => {
        setInterval(() => {
            setImageIndex(prev => (
                prev === restaurantImgArray.length - 1 ? 0 : prev + 1
            ))
        }, 10000)
    }, [])

    // console.log(imageIndex)


    // const [img, setImg] = useState("/images/restaurant-image.webp")
    // const [count, setCount] = useState(0)

    // function randomIntFromInterval(min, max) {
    //     const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    //     return restaurantImgArray[randomNum]
    // }

    // function switchImage(arr) {
    //     setCount((prevCount) => prevCount+1)
    //     if (count !== arr.length-1) {
    //         return arr[count]
    //     } else {
    //         setCount(0)
    //         return arr[count]
    //     }
    // }
    // // console.log(switchImage(restaurantImgArray))

    // useEffect(() => {
    //     setInterval(() => {
    //         setImg(switchImage(restaurantImgArray))
    //     }, 1000)
    // }, [])
    // console.log(img)


    return (
        <div className="homeContainer">
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
            <div>
                <img className="homeImg" src={restaurantImgArray[imageIndex]}/>
            </div>

        </div>
    );
}

export default Home;