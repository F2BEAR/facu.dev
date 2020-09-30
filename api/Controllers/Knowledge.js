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
