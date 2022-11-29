import React, { useEffect, useState } from 'react'
import icon from '../assets/underground.svg'
import '../Styles/Column.css'

const ColumnComponent = () => {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [showRoutes, setShowRoutes] = useState('false')
  const [showSingleRoutes, setShowSingleRoutes] = useState('false')
  const [selectedRoute, setSelectedRoute] = useState({})
  const [routeOptions, setRouteOptions] = useState([])

  useEffect(() => {
    let routeLists = [
      {
        'from': 'Los Angeles, CA',
        'to': 'Las Vegas, CA',
        'timeToDestination': '25 min.',
        'distanceToDestination': '19 miles',
        'warnings': 'Fastest route with tolls.'
      },
      {
        'from': 'Los Angeles, CA',
        'to': 'Las Vegas, CA',
        'timeToDestination': '15 min.',
        'distanceToDestination': '14 miles',
        'warnings': 'Fastest route with tolls.'
      },
      {
        'from': 'Los Angeles, CA',
        'to': 'Las Vegas, CA',
        'timeToDestination': '23 min.',
        'distanceToDestination': '18 miles',
        'warnings': 'Fastest route with tolls.'
      }
    ]
  })

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
          <input className='input-input' onChange={() => {setFrom()}} type="text" id="from" name="from" value={from}/>
        </div>
        <div className='input-row'>
          <p className='input-label'>To:</p>
          <input className='input-input' onChange={() => {setTo()}} type="text" id="from" name="from" value={to}/>
        </div>
      </div>
      <div className='spacer-bottom'></div>
    </div>
  )
}

export default ColumnComponent