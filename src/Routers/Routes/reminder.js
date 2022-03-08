const express = require("express");
const remindRoutes = express.Router();
const {
  newReminder,
  getCityInfo,
  getUserReminder,
  updateRemindInfo,
  deleteReminder,
} = require("../Controllers/reminder");

remindRoutes.get("/", getCityInfo);
remindRoutes.get("/remainder", getUserReminder);
remindRoutes.post("/", newReminder);
remindRoutes.put("/", updateRemindInfo);
remindRoutes.delete("/delete", deleteReminder);

module.exports = remindRoutes;
