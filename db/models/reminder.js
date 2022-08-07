const mongoose = require("mongoose");
const newReminderSchema = new mongoose.Schema({
  cityName: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  description: { type: String },
  temp: { type: String },
  img: { type: String },
  icon: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  departedDate: { type: String },
});

module.exports = mongoose.model("Reminde", newReminderSchema);
