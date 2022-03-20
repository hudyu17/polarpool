import React from 'react'
import './schedule.css'
import boeingImg from './airline/cffne.jpg'
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Autocomplete, Button, TextField, } from '@mui/material';

export default function schedule() {
  return (
    <div className='schedule'>
        <div className='schedule-container'>
            <div className='box-one'>
                <div className='heading-bar'>
                    <h1>
                        Iqaluit to Montreal
                    </h1>
                    <h3>March 23rd, 11:00am</h3>
                    
                </div>
                <img src={boeingImg}></img>
            </div>
            <div className='box-two'>
                <div>
                    <h3>Passengers:</h3>
                    <ul>
                        <li>Redacted name 1</li>
                        <li>Redacted name 2</li>
                        <li>Redacted name 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Freight:</h3>
                    <ul>
                        <li>Redacted name 1</li>
                        <li>Redacted name 2</li>
                        <li>Redacted name 3</li>
                    </ul>
                </div>
            </div>
            <div className='box-three'>
                <h3>Weather Restrictions</h3>
                <div className='weather-grid'>
                    <div className='weather-box'>
                        <p>March 23rd</p>
                        <div className='emoji'>☀️</div>
                    </div>
                    <div className='weather-box'>
                        <p>March 24th</p>
                        <div className='emoji'>🌧️</div>
                    </div>
                    <div className='weather-box'>
                        <p>March 25th</p>
                        <div className='emoji'>🌧️</div>
                    </div>
                    <div className='weather-box'>
                        <p>March 26th</p>
                        <div className='emoji'>💨</div>
                    </div>
                    <div className='weather-box'>
                        <p>March 27th</p>
                        <div className='emoji'>☀️</div>
                    </div>
                    <div className='weather-box'>
                        <p>March 28th</p>
                        <div className='emoji'>☀️ </div> 
                    </div>
                    <div className='weather-box'>
                        <p>March 29th</p>
                        <div className='emoji'>☀️</div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
