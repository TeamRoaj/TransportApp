import React from 'react'

import '../Styles/Main.css'

import MapComponent from './MapComponent'
import ColumnComponent from './ColumnComponent'

const MainScreenComponent = () => {

  const screenSize = window.innerWidth - 448

  return (
    <div className='container'>
      <div className='sideColumn'>
        <ColumnComponent/>
      </div>
      <div style={{width: screenSize}} className='mapColumn'>
        <MapComponent/>
      </div>
    </div>
  )
}

export default MainScreenComponent