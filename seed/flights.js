const db = require('../db')
const {Airport, Flight} = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const newYorkAirport = await Airport.find({ name: 'John F. Kennedy International Airport'})
    const chicagoAirport = await Airport.find({ name: "O'Hare International Airport"})
    const skopjeAirport = await Airport.find({ name: 'Skopje International Airport'})
    const londonAirport = await Airport.find({ name: 'Heathrow Airport'})
    const flights = [
        {
            airline: 'United Airlines',
            flightNumber: 19,
            price: 1200,
            numberOfSeats: 330,
            departingAirport: newYorkAirport[0]._id,
            arrivalAirport: londonAirport[0]._id,
            departureDateTime: '12/13, 16:55',
        },
		{
            airline: 'Lufthansa',
            flightNumber: 191,
            price: 780,
            numberOfSeats: 330,
            departingAirport: chicagoAirport[0]._id,
            arrivalAirport: skopjeAirport[0]._id,
            departureDateTime: '05/24, 18:30',
        },
        {
            airline: 'Austrian Airlines',
            flightNumber: 1007,
            price: 389,
            numberOfSeats: 300,
            departingAirport: skopjeAirport[0]._id,
            arrivalAirport: londonAirport[0]._id,
            departureDateTime: '08/01, 06:45',
        },
        {
            airline: 'Croatian Airlines',
            flightNumber: 777,
            price: 900,
            numberOfSeats: 310,
            departingAirport: skopjeAirport[0]._id,
            arrivalAirport: newYorkAirport[0]._id,
            departureDateTime: '12/31, 20:30',
        },
        {
            airline: 'Qatar Airlines',
            flightNumber: 666,
            price: 489,
            numberOfSeats: 330,
            departingAirport: skopjeAirport[0]._id,
            arrivalAirport: chicagoAirport[0]._id,
            departureDateTime: '03/20, 06:00',
        },
        {
            airline: 'Virgin Antlantic',
            flightNumber: 4001,
            price: 720,
            numberOfSeats: 350,
            departingAirport: londonAirport[0]._id,
            arrivalAirport: chicagoAirport[0]._id,
            departureDateTime: '01/01, 12:15',
        },
        {
            airline: 'Virgin Antlantic',
            flightNumber: 721,
            price: 480,
            numberOfSeats: 330,
            departingAirport: londonAirport[0]._id,
            arrivalAirport: newYorkAirport[0]._id,
            departureDateTime: '07/13, 09:15',
        }
			
			]
    await Flight.insertMany(flights)
    console.log('Created Flights with Airports!')
}
const run = async () => {
    await main()
    db.close()
}
run()