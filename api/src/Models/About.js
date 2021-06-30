const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const About = new Schema({
  Me: {
    title: { type: String, required: true },
    texts: [{ type: String, required: true }],
    listTitle: { type: String, required: true },
    list: [{ type: String, required: true }]
  },
  Academic: {
    title: { type: String, required: true },
    texts: [{ type: String, required: true }]
  },
  ThisPage: {
    title: { type: String },
    texts: [{ type: String }]
  }
})

About.plugin(uniqueValidator)

module.exports = mongoose.model('About', About, 'About')
