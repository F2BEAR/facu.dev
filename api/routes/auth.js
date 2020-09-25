const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/Authentication')

const userCtrl = require('../Controllers/User')

router.post('/private', authenticate, userCtrl.private)
router.post('/signup', authenticate, userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router
