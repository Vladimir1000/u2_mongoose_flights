const db = require(`../db`)
const { Airport } = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async() => {
    const airports = [
        {
            name: "John F. Kennedy International Airport",
            location: "New York City, New York, USA",
            code: "JFK"
        },
        {
           name: "O'Hare International Airport",
           location: "Chicago, Illinois, USA",
           code: "ORD"
        },
        {
            name: "Skopje International Airport", 
            location: "Skopje, Macedonia",
            code: "SKP"
        },
        {
            name: "Heathrow Airport",
            location: "London, United Kingdom",
            code: "LHR"
        },
        
      ]
      await Airport.insertMany(airports)
      console.log(`created airports!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()