import React from 'react'
import './landing.freight.css'
import { Autocomplete, TextField } from '@mui/material';

export default function FreightLanding() {
  return (
    <div>
       <div className='hero'>
         <h1>Book a flight for your freight</h1>
         <p>PolarPool keeps things flexible and safe</p>
       </div>
       <br/>
       <div className='hero'>
         <h2>Enter freight information below: </h2>
       </div>
       <div className='hero'>
          <TextField id="" label="Type of freight:" />
          <TextField id="" label="Amount of freight:" />
          <TextField id="" label="Urgency of delivery:" />
       </div>
    </div>
  )
}


