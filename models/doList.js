const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  assigned: { type: String},
  details: { type: String, required: true },
	link:  { type: String},
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = {
  Task: Task
};