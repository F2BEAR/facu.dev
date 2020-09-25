const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const About = new Schema({
  //
})

About.plugin(uniqueValidator)

module.exports = mongoose.model('About', About, 'About')
