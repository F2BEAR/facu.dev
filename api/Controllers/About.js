const About = require('../Models/About')
const { ErrorHandler } = require('../middlewares/Error')

exports.createAbout = (req, res, next) => {
  About.findOne({})
    .then((about) => {
      if (about) {
        throw new ErrorHandler(409, 'There is About Info already added!')
      } else {
        const newAbout = new About()
        newAbout.Me.title = req.body.About.Me.title
        newAbout.Me.texts = req.body.About.Me.texts
        newAbout.Me.listTitle = req.body.About.Me.listTitle
        newAbout.Me.list = req.body.About.Me.list
        newAbout.Academic.title = req.body.About.Academic.title
        newAbout.Academic.texts = req.body.About.Academic.texts
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
