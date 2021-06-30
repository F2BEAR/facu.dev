const routes = require('express').Router()
const contactCtrl = require('../controllers/Contact')
const aboutCtrl = require('../controllers/About')
const knowledgeCtrl = require('../controllers/Knowledge')

const mail = require('../mail/Mail')

routes.get('/', (req, res) => {
  console.log('Someone is watching')
  res.send("Yes, I'm alive ~")
})

routes.post('/sendMail', mail.SendMail)

routes.get('/contact', contactCtrl.showContact)
routes.get('/about', aboutCtrl.showAbout)
routes.get('/knowledge', knowledgeCtrl.showKnowledge)

module.exports = routes
