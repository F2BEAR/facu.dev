const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/Authentication')

const userCtrl = require('../Controllers/User')
const contactCtrl = require('../Controllers/Contact')
const aboutCtrl = require('../Controllers/About')
const knowledgeCtrl = require('../Controllers/Knowledge')

router.post('/newAbout', authenticate, aboutCtrl.createAbout)
router.post('/newContact', authenticate, contactCtrl.createContact)
router.post('/updateContact', authenticate, contactCtrl.updateContactList)
router.post('/newKnowledge', authenticate, knowledgeCtrl.createKnowledge)

router.post('/signup', authenticate, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router
