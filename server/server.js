require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
var bodyParser = require('body-parser');

const passengerRouter = require('./routers/passenger.route')
const calculateRouter = require('./routers/calculate.route')

const app = express();
const port = process.env.PORT || 5001;

const uri = process.env.URI;
mongoose.connect(uri, {useNewUrlParser: true}); 


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routers
app.use('/', passengerRouter);
app.use('/calculate', calculateRouter) 

 
app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});