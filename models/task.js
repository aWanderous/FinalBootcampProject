const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  details: { type: String, required: true },
  link: { type: String},
  cost: { type: Number},
  helper: {type: String, ref: 'Helper'}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Task: Task
};

// type: mongoose.Schema.Types.ObjectId,
// ref: 'Helper'