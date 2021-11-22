const express = require("express");
const searchRoutes = express.Router()
const getResult = require("../Controllers/search")

// fetching from Pixabay API
searchRoutes.get("/",getResult);

module.exports = searchRoutes;