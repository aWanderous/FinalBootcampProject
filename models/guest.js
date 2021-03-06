const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  guestName: { type: String, required: true },
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = {
  Guest: Guest
};