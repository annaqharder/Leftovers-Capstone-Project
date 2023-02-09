import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom'

function Home() {

    const restaurantImgArray = [
        "/images/restaurant1.webp",
        "/images/cafe1.webp",
        "/images/bar1.webp",
        "/images/restaurant2.webp",
        "/images/cafe2.jpeg",
        "/images/bar2.webp",
        "/images/restaurant3.webp",
        "/images/cafe3.jpeg",
        "/images/bar3.webp",
        "/images/restaurant4.webp",
        "/images/cafe4.jpeg",
        "/images/bar4.webp",
        "/images/restaurant5.webp",
        "/images/cafe5.webp",
        "/images/bar5.webp",
        "/images/restaurant6.webp",
        "/images/cafe6.webp",
        "/images/bar6.webp",
        "/images/restaurant7.webp",
        "/images/cafe7.webp",
        "/images/bar7.webp",
        "/images/restaurant8.webp",
        "/images/cafe8.webp",
        "/images/bar8.webp",
        "/images/restaurant9.webp",
        "/images/cafe9.jpg",
        "/images/bar9.jpg",
        "/images/restaurant10.webp",
        "/images/bar10.png",
        "/images/restaurant11.webp",
        "/images/bar11.webp",
        "/images/restaurant12.webp",
        "/images/restaurant13.webp",
        "/images/restaurant14.webp",
    ]

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
            <div className="imgContainer">
                <img className="homeImg" src={restaurantImgArray[imageIndex]}/>
            </div>
            <div className="homeLabels">
                <div className="homeLabel">
                    <Link to={`/all-restaurants`} >
                        <h1>Restaurants</h1>
                    </Link>
                </div>

                <div className="homeLabel">
                    <Link to={`/all-coffee`} >
                        <h1>Cafes/Coffee Shops</h1>
                    </Link>
                </div>

                <div className="homeLabel">
                    <Link to={`/all-bars`} >
                        <h1>Bars</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;