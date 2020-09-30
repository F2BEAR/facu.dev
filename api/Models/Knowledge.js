const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const Knowledge = new Schema({
  Useful: {
    title: { type: String, required: true },
    list: [{ type: String, required: true }]
  },
  Tech: {
    title: { type: String, required: true },
    list: [{ type: String, required: true }]
  },
  Tools: {
    title: { type: String, required: true },
    list: [{ type: String, required: true }]
  }
})

Knowledge.plugin(uniqueValidator)

module.exports = mongoose.model('Knowledge', Knowledge, 'Knowledge')
