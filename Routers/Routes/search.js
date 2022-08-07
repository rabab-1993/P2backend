const express = require("express");
const searchRoutes = express.Router()
const {getPhotos, getVideos} = require("../Controllers/search")

// fetching from Pixabay API
searchRoutes.get("/photos",getPhotos);
searchRoutes.get("/videos",getVideos);

module.exports = searchRoutes;