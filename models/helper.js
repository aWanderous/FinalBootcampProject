const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helperSchema = new Schema({
  helper: { type: String, required: true },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
});

const Helper = mongoose.model("Helper", helperSchema);

module.exports = {
  Helper: Helper
};