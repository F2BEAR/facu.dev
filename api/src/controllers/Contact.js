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

exports.updateContactListURL = (req, res, next) => {
  const contactName = req.body.name
  const contactIndex = req.body.contactIndex
  const contactURL = req.body.contactURL
  Contact.findOne({}, (err, data) => {
    if (err) {
      throw new ErrorHandler(500, 'Sorry, something went wrong :((')
    }
    data.list[contactIndex].url = contactURL
    data.save()
    res.status(200).json({
      message: `Contact List URL successfully updated for ${contactName}`
    })
  }).catch((err) => next(err))
}

exports.updateContactListName = (req, res, next) => {
  const contactName = req.body.name
  const contactIndex = req.body.contactIndex
  Contact.findOne({}, (err, data) => {
    if (err) {
      throw new ErrorHandler(500, 'Sorry, something went wrong :((')
    }
    const oldName = data.list[contactIndex].name
    data.list[contactIndex].name = contactName
    data.save()
    res.status(200).json({
      message: `Contact name successfully updated from ${oldName} to ${contactName}`
    })
  }).catch((err) => next(err))
}

exports.updateContactTitle = (req, res, next) => {
  const title = req.body.title
  Contact.findOne({}, (err, data) => {
    if (err) {
      throw new ErrorHandler(500, 'Sorry, something went wrong :(')
    }
    const oldTitle = data.title
    data.title = title
    data.save()
    res.status(200).json({
      message: `Contact Title was updated from ${oldTitle} to ${title}`
    })
  }).catch((err) => next(err))
}

exports.deleteContactList = (req, res, next) => {}
