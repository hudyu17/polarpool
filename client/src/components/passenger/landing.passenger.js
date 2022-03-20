import React from 'react'
import { useState } from 'react'

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
    <div>
      <p>test</p>
      <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input required onChange={nameUpdate}></input>
          <button type="submit"> Submit</button>
      </form>
    </div>
  )
}
