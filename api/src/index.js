// "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" dentro de c para iniciar el cli de mongo en consola
console.clear()
require('dotenv').config()
const config = require('./config/config.js')
const port = config.PORT
const url = config.URL
const app = require('./app.js')
require('./config/dbConnection')

app.listen(port, () => {
  console.log(`Express escuchando en el puerto ${port}`)
  console.log(`${url}${config.NODE_ENV === 'development' ? ':' + port : ' '}`)
})
