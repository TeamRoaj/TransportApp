import React, { useState } from 'react'

import '../Styles/Main.css'

import MapComponent from './MapComponent'
import ColumnComponent from './ColumnComponent'

const MainScreenComponent = () => {
  const [long, setLong] = useState(34.11)
  const [lat, setLat] = useState(118.24)

  const screenSize = window.innerWidth - 448

  return (
    <div className='container'>
      <div className='sideColumn'>
        <ColumnComponent/>
      </div>
      <div style={{width: screenSize}} className='mapColumn'>
        <MapComponent long={long} lat={lat}/>
      </div>
    </div>
  )
}

export default MainScreenComponent