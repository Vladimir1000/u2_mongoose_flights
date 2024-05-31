const mongoose = require('mongoose')
const FlightSchema = require('./flight')
const AirportSchema = require('./airport')
const Flight = mongoose.model('Flight', FlightSchema)
const Airport = mongoose.model('Airport', AirportSchema)

module.exports = {
  Flight,
  Airport
} 