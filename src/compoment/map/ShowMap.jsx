import React from 'react'
import './mapApi.css'
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
// import MapApi from './MapAPI';
const ShowMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      });
    
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <MapApi/>
  )
}
export const MapApi = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  )
}

export default ShowMap