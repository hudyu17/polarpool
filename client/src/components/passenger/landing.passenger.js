import React from 'react'
import { useState, useEffect } from 'react'
import './passenger.css'
import { Autocomplete, Button, TextField, } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker'
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import "react-multi-date-picker/styles/layouts/mobile.css"
import LoadingOverlay from 'react-loading-overlay'


export default function PassengerLanding() {
  const [loaded, setLoaded] = useState(true);
  const [popup, setPopup] = useState(false);
  // const [value, setValue] = useState(new Date());
  const [depart, setDepart] = useState('')
  const [destination, setDestination] = useState('')

  const today = new Date()
  const tomorrow = new Date()
  const [values, setValues] = useState([today, tomorrow])
  const [value, setValue] = useState(new Date())

  tomorrow.setDate(tomorrow.getDate() + 1)
  
  var [ name , setName ] = useState()
  const nameUpdate = (event) => { 
    setName(event.target.value) 
    // console.log(event.target.value)
  }

  function handleSubmit() {
    console.log(depart, destination, value); 
    setTimeout(() => setLoaded(true), 100);
   // You should see email and password in console.
   // ..code to submit form to backend here...

}

  const options = ['Montreal', 'Iqaluit', 'Kimmirut', 'Pangnirtung', 'Sanikiluaq']
  
  // const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
  //   const postURL = "http://localhost:5001/" //Our previously set up route in the backend
  //   console.log(name)
  //   fetch(postURL, {
  //     method: "POST",
  //     body: JSON.stringify({ // We should keep the fields consistent for managing this data later
  //       name: name,
  //       dates:[],  
  //     }),
  //     headers: {'Content-Type': 'application/json' }
  //   })
  // }

  return (
    <div className='passenger'>
    <div className='passenger-body'>
      
      <div className='hero'>
        <h1>Find flights, or your next adventure</h1>
        <p>PolarPool keeps things flexible</p>
      </div>
      <div className='input-group'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Depart from" />}
          onChange={(event, value) => setDepart(value)}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          renderInput={(params) => <TextField {...params} label="Arrive at" />}
          onChange={(event, value) => setDestination(value)}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Pick your dates"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {/* <div className='customDatePickerWidth'>
        <DatePicker 
          className="rmdp-mobile"
          value={values} 
          multiple
          format='MMM D'
          plugins={[
            <DatePanel />
           ]}
          onChange={setValues} 
        />
        
        </div> */}
      </div>
      <Button 
        variant="contained"
        type="submit"
        style={{maxWidth: '80%', minWidth: '30px', minHeight: '30px', margin: '10px auto 0', backgroundColor: '#30D5C8'}}
        onClick={() => {
          handleSubmit()
        }}>
      Reserve my spot!</Button>
        
      {/* <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input required onChange={nameUpdate}></input>
          <button type="submit"> Submit</button>
      </form> */}
    </div>
    </div>
  )
}
