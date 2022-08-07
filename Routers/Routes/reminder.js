const express = require("express");
const remindRoutes = express.Router();
const {
  newReminder,
  getCityInfo,
  getUserReminder,
  deleteReminder,
} = require("../Controllers/reminder");

remindRoutes.get("/", getCityInfo);
remindRoutes.get("/remainder", getUserReminder);
remindRoutes.post("/", newReminder);
remindRoutes.delete("/delete", deleteReminder);

module.exports = remindRoutes;
