import React, { useState, useMemo } from 'react';
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
        "/images/cafe10.webp",
        "/images/bar10.png",
        "/images/restaurant11.webp",
        "/images/cafe11.webp",
        "/images/bar11.webp",
        "/images/restaurant12.webp",
        "/images/bar12.jpg",
        "/images/restaurant13.webp",
        "/images/bar13.webp",
        "/images/restaurant14.webp",
        "/images/bar14.webp",
    ]

    const [imageIndex, setImageIndex] = useState(0);

    useMemo(() => {
        setInterval(() => {
            setImageIndex(prev => (
                prev === restaurantImgArray.length - 1 ? 0 : prev + 1
            ))
        }, 100000)
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


    // return (
    //     <section class="container p-0 ml-6 mr-2">
    //         <div>
    //     <div class="flex justify-around items-start h-full w-screen">
    //         <div class="object-cover w-96 scale-125 pt-24 ml-12">
    //             <img class="" src={restaurantImgArray[imageIndex]}/>
    //         </div>
    //         <div class="md:w-8/12 lg:w-4/12 mr-32">
    //             <div class="font-sans text-8xl mr-28 mt-36">
    //                 <Link to={`/all-restaurants`} >
    //                     <h1 class="tracking-tighter"> Restaurants</h1>
    //                 </Link>
    //             </div>

    //             <div class="text-8xl mr-28 mt-36">
    //                 <Link to={`/all-coffee`} >
    //                     <h1 class="tracking-tighter">Cafes & Coffee Shops</h1>
    //                 </Link>
    //             </div>

    //             <div class="text-8xl mr-28 mt-36">
    //                 <Link to={`/all-bars`} >
    //                     <h1 class="tracking-tighter">Bars</h1>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </section>
    // );

    return (
        <section class="">
            <div class="flex">
                <div class="container grid grid-cols-3 gap-2 mx-auto pt-2 pr-2">
                    <img class="shadow-2xl" src="./images/cafe11.webp"/>
                    <img class="shadow-2xl" src="./images/restaurant2.webp"/>
                    <img class="shadow-2xl" src="./images/restaurant4.webp"/>
                </div>
                <Link to={`/all-restaurants`} >
                    <h1 class="font-sans font-family:'Raleway' text-7xl p-8 text-center mt-2 pt-36 bg-tan bg-opacity-70 font-bold text-white no-underline hover:underline hover:shadow-2xl"> Restaurants</h1>
                </Link>
            </div>

            <div class="flex">
                <Link to={`/all-coffee`} >
                    <h1 class="font-sans font-family:'Raleway' text-7xl p-8 text-center pt-24 mt-2 mr-2 bg-green bg-opacity-70 font-bold text-white no-underline hover:underline hover:shadow-2xl">Cafes & Coffee Shops</h1>
                </Link>
                <div class="container grid grid-cols-3 gap-2 mx-auto pt-2 pr-2">
                    <img class="shadow-2xl" src="./images/cafe4.jpeg"/>
                    <img class="shadow-2xl" src="./images/cafe1.webp"/>
                    <img class="shadow-2xl" src="./images/cafe10.webp"/>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="container grid grid-cols-3 gap-2 mx-auto pt-2 pr-2">
                    <img class="shadow-2xl" src="./images/bar12.jpg"/>
                    <img class="shadow-2xl" src="./images/bar9.jpg"/>
                    <img class="shadow-2xl" src="./images/bar6.webp"/>
                </div>
                <Link to={`/all-bars`} >
                    <h1 class="font-sans font-family:'Raleway' text-7xl p-8 text-center mt-2 pt-24 bg-red bg-opacity-70 font-bold text-white no-underline hover:underline hover:shadow-2xl">Bars & Drinks</h1>
                </Link>
            </div>
    </section>
    );
}

export default Home;