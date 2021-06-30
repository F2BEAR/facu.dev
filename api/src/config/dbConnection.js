const mongoose = require('mongoose')
const mongoURI = process.env.MONGOURI
const mongoPort = process.env.MONGOPORT
const mongoDB = process.env.MONGODB
mongoose
  .connect(`mongodb://${mongoURI}:${mongoPort}/${mongoDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((connection) => {
    console.log('Successfully connected to MongoDB!')
    return connection
  })
  .catch((err) => {
    console.error('Unable to connect to MongoDB :(')
    console.error(err)
    return err
  })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db
