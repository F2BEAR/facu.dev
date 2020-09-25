const jwt = require('jsonwebtoken')
const { ErrorHandler } = require('./Error')
const User = require('../Models/User')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const secret = process.env.TOKENSECRET
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        throw new ErrorHandler(401, err)
      }
      const userId = decoded.userId
      if (req.body.userId && req.body.userId !== userId) {
        throw new ErrorHandler(401, 'Invalid user ID')
      } else {
        next()
      }
    })
  } catch (error) {
    next(error)
  }
}
