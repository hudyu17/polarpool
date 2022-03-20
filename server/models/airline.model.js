const mongoose = require('mongoose');

// More like an aircraft schema
const airlineSchema = new mongoose.Schema({
  aircraft: { type: String, required: true },
  capacity: { type: Number, required: true },
  availability: { type: Array, required: true }
}, {
  timestamps: false,
});

const Airline = mongoose.model('Airline', airlineSchema);

module.exports = Airline;