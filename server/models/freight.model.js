const mongoose = require('mongoose');

const freightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  volume: { type: Number, required: true },
  dates: { type: Array, required: true },
}, {
  timestamps: false,
});

const Freight = mongoose.model('Freight', freightSchema);

module.exports = Freight;