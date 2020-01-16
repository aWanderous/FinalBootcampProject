const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  task: { type: String, required: true },
  assigned: { type: String},
  details: { type: String, required: true },
	link:  { type: String},
});

const List = mongoose.model("List", listSchema);

module.exports = {
  List: List
};