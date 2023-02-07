import React, {useEffect} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '50vh'
};


const center = {
    lat: -3.745,
    lng: -38.523
};


const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: `${process.env.GMAPS_API_BROWSER_KEY}`
    })

    useEffect(() =>  {
        fetch(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.GMAPS_API_BROWSER_KEY}`)
    })

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        </GoogleMap>
    ) : (<></>)
}

export default React.memo(Map)