const About = require('../Models/About')
const { ErrorHandler } = require('../middlewares/Error')

exports.createAbout = (req, res, next) => {
  About.findOne({})
    .then((about) => {
      if (about) {
        throw new ErrorHandler(409, 'There is About Info already added!')
      } else {
        const newAbout = new About()
        const reqData = req.body.About
        newAbout.Me.title = reqData.Me.title
        newAbout.Me.texts = reqData.Me.texts
        newAbout.Me.listTitle = reqData.Me.listTitle
        newAbout.Me.list = reqData.Me.list
        newAbout.Academic.title = reqData.Academic.title
        newAbout.Academic.texts = reqData.Academic.texts
        newAbout.ThisPage.title = reqData.ThisPage.title
        newAbout.ThisPage.texts = reqData.ThisPage.texts
        newAbout.save((err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          if (data) {
            res.status(201).json({
              message: 'About info added successfully!'
            })
          }
        })
      }
    })
    .catch((error) => {
      next(error)
    })
}

exports.showAbout = (req, res, next) => {
  About.find()
    .then((about) => {
      res.status(200).json({ about: about })
    })
    .catch((error) => {
      next(error)
    })
}
