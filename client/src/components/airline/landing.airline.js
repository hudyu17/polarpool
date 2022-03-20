import React, { useState } from 'react'
import './airline.css'
import { Card, Box, Grid, Container, Typography, Button, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { icon1, icon2 } from './icon';
import { Link } from 'react-router-dom';
import { marker } from 'leaflet';
import atrImg from './cftik.jpg'
import boeingImg from './cffne.jpg'

export default function AirlineLanding() {

  const [aircrafts, setAircrafts] = useState([
    {reg: 'C-FTIK', type: 'ATR-42', img: atrImg, icon: icon1, position: [63.755665, -68.546010]},
    {reg: 'C-FFNE', type: 'B737-400', img: boeingImg, icon: icon2, position: [61.854432, -70.346397]},
  ])

  function handleSwitchChange(reg){
    console.log(reg)
  }

  return (
    <div className='airline'>
    <div className='airline-body'>
      <div className='card-title'>
        <h1>Fleet Portal</h1>
        <p>Manage your aircraft availability</p>
      </div>
      {aircrafts.map(aircraft => 
        <div className='card'>
          <div className='card-heading'> 
          <h3>{aircraft.type} ({aircraft.reg})</h3>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked color="secondary" onChange={handleSwitchChange()}/>} label="Available" />
          </FormGroup>
          </div>
          <img src={aircraft.img}></img>
          <p>Current location: {aircraft.position[0]}, {aircraft.position[1]}</p>
        </div>
      )}
    
      <div className='add-button'>
        <Button 
          component={Link} to="/schedule"
          variant="contained"
          type="submit"
          style={{width: '100%', backgroundColor: '#08595E'}}
          onClick={() => {
            // handleSubmit()
          }}>get upcoming flight schedule
        </Button>
      </div>
      <div className='big-card'>
      
      <MapContainer center={[63.755665, -68.546010]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {aircrafts.map(aircraft => 
        <Marker icon={aircraft.icon} position={aircraft.position}/>
          )}
        {/* <Marker icon={icon1} position={[63.755665, -68.546010]}/>
        <Marker icon={icon2} position={[61.854432, -70.346397]}/> */}
      </MapContainer>
      </div>
    </div>
    </div>
  )
}
