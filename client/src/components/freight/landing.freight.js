import React from 'react';
import './landing.freight.css';
import { Autocomplete, TextField , Button } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';

export default function FreightLanding() {
  return (
    <div>
      <div className='hero'>
        <h1>Book a flight for your freight</h1>
        <p>PolarPool keeps things flexible and safe</p>
      </div>

      <br/>

      <div className='hero'>
        <h2>Departure and destination locations: </h2>
      </div>
      <div className='input-group'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={['Montreal', 'Iqaluit']}
          renderInput={(params) => <TextField {...params} label="Depart from" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={['Montreal', 'Iqaluit']}
          renderInput={(params) => <TextField {...params} label="Arrive at" />}
        />
      </div>

      <br/>

      <div className='hero'>
        <h2>Pick departure date: </h2>
      </div>
      <div className='hero'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Departure date:"
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      <br/>

      <div className='hero'>
        <h2>Enter freight information below: </h2>
      </div>
      <div className='hero'>
        <TextField id="freightType" label="Type of freight:" />
        <TextField id="freightAmount" label="Amount of freight:" />
        <TextField id="freightUrgency" label="Urgency of delivery:" />
      </div>

      <br/>

      <div className='hero'>
        <Button variant="contained">Book Flight</Button>
      </div>
    </div>
  )
}


