const express = require("express");
const remindRoutes = express.Router();
const {newReminder, getCityInfo,getUserReminder, updateRemindInfo } = require('../Controllers/reminder');



remindRoutes.get("/", getCityInfo);
remindRoutes.get("/remainder", getUserReminder);
remindRoutes.post("/", newReminder);
remindRoutes.put("/", updateRemindInfo);



module.exports = remindRoutes;