const {task} = require("../models/task");
const {Helper} = require("../models/helper");

module.exports = {
  findAll: function(req, res) {
    Task
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // addHelper: function(req, res){
  //   Helper.findById({_id: '5e26a591a728003fd0e74678'})
  //   .then(helper => {
  //     console.log(helper);
  //     Task.update({_id: req.body.TaskId},{$push:{helpers: helper}})
  //     .then(res.json('success'))
  //   })
  // },
  addHelper: function(req, res){
    Task.findById({_id: req.body.taskId}).populate('helpers').exec((err,task)=>res.json(task.helpers));
  }
};
