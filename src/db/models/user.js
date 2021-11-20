const mongoose = require("mongoose");
const newUserSchema = new mongoose.Schema({
    name: { type: String},
    email: String
});