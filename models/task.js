const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: { type: String, required: true },
  details: { type: String, required: true },
  link: { type: String},
  cost: { type: Number},
  helpers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Helper'
  }]
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Task: Task
};