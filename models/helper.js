const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helperSchema = new Schema({
  name: { type: String, required: true },
});

const Helper = mongoose.model("Helper", helperSchema);

module.exports = {
  Helper: Helper
};