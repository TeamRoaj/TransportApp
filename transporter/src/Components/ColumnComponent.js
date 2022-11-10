import React, { useState } from 'react'
import icon from '../assets/underground.svg'
import '../Styles/Column.css'

const ColumnComponent = () => {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

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
    </div>
  )
}

export default ColumnComponent