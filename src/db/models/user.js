const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userName: {type: String, required: true, unique: true, trim:true},
    email: { type: String, required: true, unique: true, trim:true, lowercase: true },
    password:{type: String, required: true, trim:true }
});

module.exports = mongoose.model("User", newUserSchema)