const routes = require('express').Router()

routes.get('/', (req, res) => {
  console.log('Someone is watching')
  res.send("Yes, I'm alive ~")
})

module.exports = routes
