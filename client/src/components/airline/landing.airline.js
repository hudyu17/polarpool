import React from 'react'
import './airline.css'
import { Card, Box, Grid, Container, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { icon1, icon2 } from './icon';

export default function AirlineLanding() {

  return (
    <div className='airline'>
    <div className='airline-body'>
      <div className='card-title'>
        <h1>Fleet Portal</h1>
        <p>Manage your aircraft availability</p>
      </div>
      <div className='card'>mistake</div>
      <div className='card'>mistake</div>
      <div className='big-card'>
      <MapContainer center={[63.755665, -68.546010]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker icon={icon1} position={[63.755665, -68.546010]}/>
        <Marker icon={icon2} position={[61.854432, -70.346397]}/>
      </MapContainer>
      </div>
    </div>
    </div>
  )
}
