import React, { useEffect, useState } from 'react'
import icon from '../assets/underground.svg'
import '../Styles/Column.css'
import axios from '../axios'

import RouteOptionComponent from './RouteOptionComponent'

const ColumnComponent = () => {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [isBus, setIsBus] = useState('false')
  const [isRail, setIsRail] = useState('false')
  const [isSubway, setIsSubway] = useState('false')
  const [isTrain, setIsTrain] = useState('false')
  const [routeOptions, setRouteOptions] = useState(null)
  const [showRouteOptions, setShowRouteOptions] = useState('false')
  const [selectedRoute, setSelectedRoute] = useState(null)

  const submitRequest = () => {
    axios.get('/calcroute', {
      params: {
        origin: from,
        destination: to,
        travelMode: 'TRANSIT',
        drivingOptions: {
          departureTime: Date.now(),
          trafficModel: 'optimistic'
        },
        unitSystem: 'metric',
        optimizeWaypoints: true,
        provideRouteAlternatives: true,
        avoidFerries: true,
        avoidHighways: false,
        avoidTolls: false,
      }
    })
      .then((response) => {
        console.log((response.data));
        setRouteOptions(response.data)
        setShowRouteOptions(true)

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='column-container'>
      <div className='column-header'>
        <img alt='train icon' className='app-icon' src={icon}/>
        <p className='app-name'>Transporter</p>
      </div>
      <div className='spacer'></div>
      <div className='form-container'>
        <div className='input-row'>
          <p className='input-label'>From:</p>
          <input className='input-input' onChange={e => setFrom(e.target.value)} type="text" id="from" name="from" value={from}/>
        </div>
        <div className='input-row'>
          <p className='input-label'>To:</p>
          <input className='input-input' onChange={e => setTo(e.target.value)} type="text" id="from" name="from" value={to}/>
        </div>
        <div>
          <button className='submit' type='submit' name='submit' value={'Submit'} onClick={() => {submitRequest()}}>Submit</button>
        </div>
      </div>
      <div className='spacer-bottom'></div>
      {
        showRouteOptions === true ? <RouteOptionComponent routeOptions={routeOptions} selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute}/> : null
      }
    </div>
  )
}

export default ColumnComponent