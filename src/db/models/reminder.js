const mongoose = require("mongoose");
const newReminderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date:{type: Date, required: true },
    description:{type: String },
    temp:{type: String },
    img:{type: String },
    icon:{type: String },
});

module.exports = mongoose.model("reminde",newReminderSchema)