const routes = require('express').Router()
const contactCtrl = require('../Controllers/Contact')
const aboutCtrl = require('../Controllers/About')
const knowledgeCtrl = require('../Controllers/Knowledge')

const mail = require('../Mail/Mail')

routes.get('/', (req, res) => {
  console.log('Someone is watching')
  res.send("Yes, I'm alive ~")
})

routes.post('/sendMail', mail.SendMail)

routes.get('/contact', contactCtrl.showContact)
routes.get('/about', aboutCtrl.showAbout)
routes.get('/knowledge', knowledgeCtrl.showKnowledge)

module.exports = routes
