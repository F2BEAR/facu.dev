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
    .catch((error) => next(error))
}

exports.showAbout = (req, res, next) => {
  About.find()
    .then((about) => {
      res.status(200).json({ about: about })
    })
    .catch((error) => next(error))
}

exports.updateAboutMe = (req, res, next) => {
  const type = req.body.type
  switch (type) {
    case 'texts':
      const texts = req.body.texts
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Me.texts = texts
        data.save()
        res.status(200).json({ message: 'About Me updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'list':
      const list = req.body.list
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Me.list = list
        data.save()
        res.status(200).json({ message: 'About Me updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'title':
      const title = req.body.title
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Me.title = title
        data.save()
        res.status(200).json({ message: 'About Me updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'listTitle':
      const listTitle = req.body.listTitle
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Me.listTitle = listTitle
        data.save()
        res.status(200).json({ message: 'About Me updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'all':
      {
        const texts = req.body.texts
        const list = req.body.list
        const title = req.body.title
        const listTitle = req.body.listTitle
        About.findOne({}, (err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          data.Me.texts = texts
          data.Me.list = list
          data.Me.title = title
          data.Me.listTitle = listTitle
          data.save()
          res.status(200).json({ message: 'About Me updated successfully!' })
        }).catch((err) => next(err))
      }
      break
    default:
      console.log('default')
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.updateAboutAcademics = (req, res, next) => {
  const type = req.body.type
  switch (type) {
    case 'texts':
      const texts = req.body.texts
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Academic.texts = texts
        data.save()
        res
          .status(200)
          .json({ message: 'About Academics updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'title':
      const title = req.body.title
      About.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Academic.title = title
        data.save()
        res
          .status(200)
          .json({ message: 'About Academics updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'all':
      {
        const texts = req.body.texts
        const title = req.body.title
        About.findOne({}, (err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          data.Academic.texts = texts
          data.Academic.title = title
          data.save()
          res
            .status(200)
            .json({ message: 'About Academics updated successfully!' })
        }).catch((err) => next(err))
      }
      break
    default:
      console.log('default')
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.deleteAboutMe = (req, res, next) => {}

exports.deleteAboutAcademics = (req, res, next) => {}
