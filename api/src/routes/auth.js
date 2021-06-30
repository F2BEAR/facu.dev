const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/Authentication')

// controllers
const userCtrl = require('../controllers/User')
const contactCtrl = require('../controllers/Contact')
const aboutCtrl = require('../controllers/About')
const knowledgeCtrl = require('../controllers/Knowledge')

// "new" routes
router.post('/newAbout', authenticate, aboutCtrl.createAbout)
router.post('/newContact', authenticate, contactCtrl.createContact)
router.post('/newKnowledge', authenticate, knowledgeCtrl.createKnowledge)

// "update" routes
// Knowledge
router.post(
  '/updateUsefulKnowledge',
  authenticate,
  knowledgeCtrl.updateUsefulKnowledge
)
router.post(
  '/updateTechKnowledge',
  authenticate,
  knowledgeCtrl.updateTechKnowledge
)
router.post(
  '/updateToolsKnowledge',
  authenticate,
  knowledgeCtrl.updateToolsKnowledge
)
// Contact
router.post('/updateContactURL', authenticate, contactCtrl.updateContactListURL)
router.post(
  '/updateContactListName',
  authenticate,
  contactCtrl.updateContactListName
)
router.post('/updateContactTitle', authenticate, contactCtrl.updateContactTitle)
// About
router.post('/updateAboutMe', authenticate, aboutCtrl.updateAboutMe)
router.post(
  '/updateAboutAcademics',
  authenticate,
  aboutCtrl.updateAboutAcademics
)

// "delete" routes
// Knowledge
router.post('/deleteUsefulKnowledge', knowledgeCtrl.deleteUsefulKnowledge)
router.post('/deleteTechKnowledge', knowledgeCtrl.deleteTechKnowledge)
router.post('/deleteToolsKnowledge', knowledgeCtrl.deleteToolsKnowledge)
// About
router.post('/deleteAboutMe', aboutCtrl.deleteAboutMe)
router.post('/deleteAboutAcademics', aboutCtrl.deleteAboutAcademics)
// Contact
router.post('/deleteContactList', contactCtrl.deleteContactList)

// "auth" routes
router.post('/signup', authenticate, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router
