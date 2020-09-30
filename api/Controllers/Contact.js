const Contact = require('../Models/Contact')
const { ErrorHandler } = require('../middlewares/Error')

exports.createContact = (req, res, next) => {
  Contact.findOne({ title: req.body.title })
    .then((contact) => {
      if (contact) {
        throw new ErrorHandler(409, 'There is Contact Info already!')
      } else {
        const newContact = new Contact()
        newContact.title = req.body.title
        newContact.list = req.body.list
        newContact.save((err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          if (data) {
            res.status(201).json({
              message: 'Contact info added successfully!'
            })
          }
        })
      }
    })
    .catch((error) => {
      next(error)
    })
}

exports.showContact = (req, res, next) => {
  Contact.find()
    .then((contact) => {
      res.status(200).json({ contact: contact })
    })
    .catch((error) => {
      next(error)
    })
}

exports.updateContactList = (req, res, next) => {
}

exports.deleteContactList = (req, res, next) => {}
