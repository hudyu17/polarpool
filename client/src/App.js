import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './app.css'

import AirlineLanding from './components/airline/landing.airline';
import FreightLanding from './components/freight/landing.freight';
import PassengerLanding from './components/passenger/landing.passenger';
import { ThemeProvider, createTheme } from '@mui/material/styles'

function App() {
  const THEME = createTheme({
    typography: {
     "fontFamily": `"Poppins", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path="/" element={<PassengerLanding/>}/>
          <Route path="freight" element={<FreightLanding/>}/>
          <Route path="airline" element={<AirlineLanding/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
