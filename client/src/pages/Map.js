import React, { useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { CoffeeContext } from '../context/CoffeeProvider';
import { RestaurantContext } from '../context/RestaurantProvider';
import { BarContext} from '../context/BarProvider';
import { EateryContext} from '../context/EateryProvider'

const containerStyle = {
    width: '60vw',
    height: '80vh'
};

const center = {
    lat: 39.7392,
    lng: -104.9903
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })

    const {coffees} = useContext(CoffeeContext)
    const {restaurants} = useContext(RestaurantContext)
    const {bars} = useContext(BarContext)
    const {eateries} = useContext(EateryContext)

    // const [eateries, setEateries] = useState([]);
    const [selected, setSelected]= useState(null)

    // useEffect(() => {
    //     fetch(`/eateries`)
    //     .then((r) => r.json())
    //     .then((eatery) => setEateries(eatery))
    // }, [])


    // const eateriesArray = eateries.map((eatery) => {
    //     return (
    //         <>
    //             {/* <h2>{eatery.eatery_name}</h2>
    //             <p>{eatery.eatery_address}</p> */}
    //         </>
    //     )
    // })


    // const [currentPosition, setCurrentPosition] = useState([])

    // const success = position => {
    //     const currentPosition = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //     }
    //     setCurrentPosition(currentPosition)
    // }

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success)
    // })

    return isLoaded ? (
        <section class="flex justify-around p-6 items-center">
            <div class="drop-shadow-xl rounded border border-stone-300">
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                // center={currentPosition}
                zoom={10}
                >

                {restaurants.map((marker) => (
                    <Marker
                        id="marker"
                        key={marker.eatery_name}
                        position={{ lat:marker.latitude, lng: marker.longitude }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                        }}
                        animation={2}
                        onMouseOver={()=>{
                            setSelected(marker);
                        }}
                    />
                ))}

                {coffees.map((marker) => (
                    <Marker
                        id="marker"
                        key={marker.eatery_name}
                        position={{ lat:marker.latitude, lng: marker.longitude }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
                        }}
                        animation={2}
                        onMouseOver={()=>{
                            setSelected(marker);
                        }}
                    />
                ))}

                {bars.map((marker) => (
                    <Marker
                        id="marker"
                        key={marker.eatery_name}
                        position={{ lat:marker.latitude, lng: marker.longitude }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        }}
                        animation={2}
                        onMouseOver={()=>{
                            setSelected(marker);
                        }}
                    />
                ))}

                {eateries.map((marker) => (
                    <Marker
                        id="marker"
                        key={marker.eatery_name}
                        position={{ lat:marker.latitude, lng: marker.longitude }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                        }}
                        animation={2}
                        onMouseOver={()=>{
                            setSelected(marker);
                        }}
                    />
                ))}

                { selected ? (
                    <InfoWindow position={{ lat: selected.latitude, lng: selected.longitude }} onCloseClick={() => setSelected(null)}>
                        <div>
                            <Link to={`/${selected.eatery_category}s/${selected.id}`}>
                                <h2 class="no-underline hover:underline">{selected.eatery_name}</h2>
                            </Link>
                                <p>{selected.eatery_category}: {selected.eatery_type}</p>
                                <p>{selected.eatery_address}</p>
                        </div>
                    </InfoWindow>
                ) : null}
                <> </>
                </GoogleMap>
            </div>

            <div class="drop-shadow-xl border border-stone-300 rounded px-4 py-2 bg-stone-100 bg-opacity-70">
                {/* <h1 class="text-3xl font-bold py-4 text-center tracking-widest">KEY</h1> */}
                <div class="flex py-2">
                    <img src="http://maps.google.com/mapfiles/ms/icons/purple-dot.png"/>
                    <h1 class="uppercase text-lg font-bold pt-1">Restaurants</h1>
                </div>

                <div class="flex py-2">
                    <img src="http://maps.google.com/mapfiles/ms/icons/pink-dot.png"/>
                    <h1 class="uppercase text-lg font-bold pt-1">Cafes & Coffee Shops</h1>
                </div>

                <div class="flex py-2">
                    <img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png"/>
                    <h1 class="uppercase text-lg font-bold pt-1">Bars</h1>
                </div>

                <div class="flex py-2">
                    <img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"/>
                    <h1 class="uppercase text-lg font-bold pt-1">Want To Visit</h1>
                </div>
            </div>
        </section>
    ) : (<></>)

}

export default React.memo(Map)