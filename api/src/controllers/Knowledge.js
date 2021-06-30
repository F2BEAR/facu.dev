const Knowledge = require('../Models/Knowledge')
const { ErrorHandler } = require('../middlewares/Error')

exports.createKnowledge = (req, res, next) => {
  Knowledge.findOne({})
    .then((knowledge) => {
      if (knowledge) {
        throw new ErrorHandler(409, 'There is Knowledge Info already added!')
      } else {
        const newKnowledge = new Knowledge()
        newKnowledge.Useful.title = req.body.Knowledge.Useful.title
        newKnowledge.Useful.list = req.body.Knowledge.Useful.list
        newKnowledge.Tech.title = req.body.Knowledge.Tech.title
        newKnowledge.Tech.list = req.body.Knowledge.Tech.list
        newKnowledge.Tools.title = req.body.Knowledge.Tools.title
        newKnowledge.Tools.list = req.body.Knowledge.Tools.list
        newKnowledge.save((err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          if (data) {
            res.status(201).json({
              message: 'Knowledge info added successfully!'
            })
          }
        })
      }
    })
    .catch((error) => {
      next(error)
    })
}

exports.showKnowledge = (req, res, next) => {
  Knowledge.find()
    .then((knowledge) => {
      res.status(200).json({ knowledge: knowledge })
    })
    .catch((error) => {
      next(error)
    })
}

exports.updateUsefulKnowledge = (req, res, next) => {
  const type = req.body.type
  switch (type) {
    case 'list':
      const list = req.body.list
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Useful.list = list
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'title':
      const title = req.body.title
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Useful.title = title
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'all':
      {
        const list = req.body.list
        const title = req.body.title
        Knowledge.findOne({}, (err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          data.Useful.list = list
          data.Useful.title = title
          data.save()
          res.status(200).json({ message: 'Knowledge updated successfully!' })
        }).catch((err) => next(err))
      }
      break
    default:
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.updateTechKnowledge = (req, res, next) => {
  const type = req.body.type
  switch (type) {
    case 'list':
      const list = req.body.list
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Tech.list = list
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'title':
      const title = req.body.title
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Tech.title = title
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'all':
      {
        const list = req.body.list
        const title = req.body.title
        Knowledge.findOne({}, (err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          data.Tech.list = list
          data.Tech.title = title
          data.save()
          res.status(200).json({ message: 'Knowledge updated successfully!' })
        }).catch((err) => next(err))
      }
      break
    default:
      console.log('default')
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.updateToolsKnowledge = (req, res, next) => {
  const type = req.body.type
  switch (type) {
    case 'list':
      const list = req.body.list
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Tools.list = list
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'title':
      const title = req.body.title
      Knowledge.findOne({}, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, err)
        }
        data.Tools.title = title
        data.save()
        res.status(200).json({ message: 'Knowledge updated successfully!' })
      }).catch((err) => next(err))
      break
    case 'all':
      {
        const list = req.body.list
        const title = req.body.title
        Knowledge.findOne({}, (err, data) => {
          if (err) {
            throw new ErrorHandler(500, err)
          }
          data.Tools.list = list
          data.Tools.title = title
          data.save()
          res.status(200).json({ message: 'Knowledge updated successfully!' })
        }).catch((err) => next(err))
      }
      break
    default:
      console.log('default')
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.deleteUsefulKnowledge = (req, res, next) => {
  const type = req.body.type
  const name = req.body.name
  const index = req.body.index
  switch (type) {
    case 'list':
      Knowledge.find({ Useful: { list: [name] } }, (err, data) => {
        if (err) {
          throw new ErrorHandler(500, 'Something went wrong :((')
        }
        res
          .status(200)
          .json({ data: data, message: `${name} was successfully deleted` })
      }).catch((err) => next(err))
      break
    case 'title':
      break
    case 'all':
      break
    default:
      res.status(406).json({ message: "Sorry, we don't know that type :((" })
  }
}

exports.deleteTechKnowledge = (req, res, next) => {}

exports.deleteToolsKnowledge = (req, res, next) => {}
