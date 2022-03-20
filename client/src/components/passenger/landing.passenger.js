import React from 'react'
import { useState } from 'react'
import './passenger.css'
import { Autocomplete, TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function PassengerLanding() {
  var [ name , setName ] = useState()
  const nameUpdate = (event) => { 
    setName(event.target.value) 
    // console.log(event.target.value)
  }
  
  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:5001/" //Our previously set up route in the backend
    console.log(name)
    fetch(postURL, {
      method: "POST",
      body: JSON.stringify({ // We should keep the fields consistent for managing this data later
        name: name,
        dates:[],  
      }),
      headers: {'Content-Type': 'application/json' }
    })
  }

  return (
    <div className='passenger-body'>
      <div className='hero'>
        <h1>Find flights, or your next adventure</h1>
        <p>PolarPool keeps things flexible</p>
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
      <div className='date-picker'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="landscape"
            openTo="day"
            // value={value}
            // shouldDisableDate={isWeekend}
            // onChange={(newValue) => {
            //   setValue(newValue);
            // }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input required onChange={nameUpdate}></input>
          <button type="submit"> Submit</button>
      </form>
    </div>
  )
}
