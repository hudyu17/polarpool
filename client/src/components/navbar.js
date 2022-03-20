import React from 'react'
import { Link } from "react-router-dom";
import logo from '../pp-logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h3>Polar Pool</h3>
        <Link style={{ textDecoration: 'none' }} to="/">Passengers</Link>
        
        <Link style={{ textDecoration: 'none' }} to="/freight">Freight</Link>
        
        
        <Link style={{ textDecoration: 'none' }} to="/airline">Airline Portal</Link>
        
        
        <Link style={{ textDecoration: 'none' }} to="/schedule">Scheduler</Link>
        
    </div>
  )
}
