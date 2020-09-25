const mongoose = require('mongoose')
const mongoURI = process.env.MONGOURI
const mongoPort = process.env.MONGOPORT

const mongoDB = process.env.MONGODB
mongoose.connect(`mongodb://${mongoURI}:${mongoPort}/${mongoDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB!')
    console.error(error)
  })

mongoose.set('useCreateIndex', true)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
