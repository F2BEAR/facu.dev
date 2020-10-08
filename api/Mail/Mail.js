"use strict"
const nodemailer = require('nodemailer')
const {
  serverMail,
  userMail,
  passwordMail,
  portMail,
} = require('./mail.config')

exports.SendMail = (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    text: req.body.message,
  };

  let transporter = nodemailer.createTransport({
    host: serverMail,
    port: portMail,
    secure: false,
    auth: {
      user: userMail,
      pass: passwordMail,
    },
  })
  transporter.sendMail({
    from: `${data.name} <${data.email}>`,
    replyTo: data.email,
    to: userMail,
    subject: 'Client Inquiry',
    text: data.text},
    console.log('message sent')
  )

  res.sendStatus(res.statusCode)
}
