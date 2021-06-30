const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const Contact = new Schema({
  title: { type: String, required: true },
  list: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true }
    }
  ]
})

Contact.plugin(uniqueValidator)

module.exports = mongoose.model('Contact', Contact, 'Contact')
