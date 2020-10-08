// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" dentro de c para iniciar el cli de mongo en consola
console.clear()

const express = require('express')
const app = express()
require('dotenv').config()

const routes = require('./routes/index')
const authRoutes = require('./routes/auth')
const { handleError, ErrorHandler } = require('./middlewares/Error')

const bodyParser = require('body-parser')
var cors = require('cors')

const port = process.env.PORT
require('./db/dbConnection')

app.listen(port, () => {
  console.log(`Express escuchando en el puerto ${port}`)
  console.log(`https://api.facu.dev`)
})

app.use(bodyParser.json(), bodyParser.text())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(cors())

app.use('/', routes)
app.use('/auth', authRoutes)

app.all('*', (req, res) => {
  throw new ErrorHandler(404, `Sorry, cant find ${req.originalUrl}!`)
})

app.use((err, req, res, next) => {
  handleError(err, res)
})
