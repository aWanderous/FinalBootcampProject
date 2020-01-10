const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true },
  helper: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = {
  Place: Place
};