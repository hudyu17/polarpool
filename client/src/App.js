import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './app.css'

import AirlineLanding from './components/airline/landing.airline';
import FreightLanding from './components/freight/landing.freight';
import PassengerLanding from './components/passenger/landing.passenger';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PassengerLanding/>}/>
        <Route path="freight" element={<FreightLanding/>}/>
        <Route path="airline" element={<AirlineLanding/>}/>
      </Routes>
    </div>
  );
}

export default App;
