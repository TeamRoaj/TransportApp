import React, { useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapComponent = () => {
  const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
  };
  
  function MyMapComponent(
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })
  ) {
    const ref = useRef();
  
    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  
    return <div ref={ref} id="map" />;
  }
  
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  
    return (
      <Wrapper apiKey="AIzaSyDXQt2X96rqbBvX1Fcu7VvWZsDdLd1JLt8" render={render}>
        <MyMapComponent center={{ lat: -34.397, lng: 150.644 }} zoom={4} />
      </Wrapper>
   
    );
  

}


export default MapComponent