const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  details: { type: String, required: true },
  helper: {type: String},
  note: { type: String},
  cost: { type: Number},
  link: { type: String}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
  Task: Task
};