const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dates: { type: Array, required: true },
}, {
  timestamps: false,
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;