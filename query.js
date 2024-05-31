const { Airport, Flight } = require('./models');
const db = require('./db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// find all flights
const findFlights = async () => {
    const flights = await Flight.find();
    console.log(flights);
}

// create an airport
const createAirport = async (name, location, code) => {
    const airport = new Airport({ name, location, code });
    await airport.save();
    console.log('Created Airport:', airport);
};

// create a flight
const createFlight = async (airline, flightNumber, price, numberOfSeats, departingAirportId, arrivalAirportId, departureDateTime) => {
    const flight = new Flight({
        airline,
        flightNumber,
        price,
        numberOfSeats,
        departingAirport: departingAirportId,
        arrivalAirport: arrivalAirportId,
        departureDateTime
    });
    await flight.save();
    console.log('Created Flight:', flight);
};

// get details by ID
const getById = async (model, id) => {
    const result = await model.findById(id);
    console.log(result);
};

// update details by ID
const updateById = async (model, id, updateData) => {
    const result = await model.findByIdAndUpdate(id, updateData, { new: true });
    console.log('Updated:', result);
};

// delete by ID
const deleteById = async (model, id) => {
    await model.findByIdAndDelete(id);
    console.log('Deleted:', id);
};

async function main() {
    try{
        await findFlights()
        // create airports
        await createAirport('Airport', 'Location ', 'T001');
        await createAirport(' Airport 2', 'Location 2', 'T002');

        // create flight
        const airports = await Airport.find();
        await createFlight('MK Airline', 111, 333, 555, airports[0]._id, airports[1]._id, '2024-01-01T10:00:00Z');

        // get by ID
        await getById(Airport, airports[0]._id);
        const flights = await Flight.find();
        await getById(Flight, flights[0]._id);

        // update airport by ID
        await updateById(Airport, airports[0]._id, { name: 'Updated Airport Name' });

        // update flight by ID
        await updateById(Flight, flights[0]._id, { price: 600 });

        // delete airport by ID 
        await deleteById(Airport, airports[0]._id);

        // delete flight by ID 
        await deleteById(Flight, flights[0]._id);


    } catch (error) {
        console.log(error);
    } finally {
        await db.close();
    }
}

main();