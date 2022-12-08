import React, {useState} from "react";
import {
  GoogleMapsProvider,
  useGoogleMap
} from '@ubilabs/google-maps-react-hooks'


const MapComponent = (props) => {
  const {long, lat} = props
  
  const mapOptions = {
    zoom: 9,
    center: {
      lat: 34.0430,
      long: 118.2673 
    }
  }

  const [mapContainer, setMapContainer] = useState(null)

  return(
    <GoogleMapsProvider 
      googleMapsAPIKey={'AIzaSyDzr5JW4micTzRKefLE4iBm7nge5REsZ7E&'}
      mapContainer={mapContainer}
      options={mapOptions}
    >
      <div style={{ height: '1000px', width: '1500px'}} ref={(node) => setMapContainer(node)}/>
    </GoogleMapsProvider>
  )
}


export default MapComponent