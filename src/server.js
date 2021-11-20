

const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios").default;
const app = express();

const dotenv = require("dotenv");
dotenv.config();
// imported the db file
require("./db/db")

/* Middleware*/

app.use(express.json());

// Cors
const cors = require("cors");
app.use(cors());

// Setup Server
const port = process.env.PORT || 5400;

// Api Calls

// fetching from openweathermap API

app.get("/info/:name", async (req, res) => {
    const name = req.params.name;
  try {
    const openweathermap = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.WEATHER_KEY}`);
    const pixaBay = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${openweathermap.data.name}&image_type=photo`);
console.log(openweathermap.data);
console.log(pixaBay.data);
   
    res.status(200)
   
  } catch (error) {
    console.log(error);
  }
});



// fetching from Pixabay API

// app.get("/search/:nmae", async (req, res) => {
//     const name = req.params.name;
//     try {
//     const pixaBay = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${name}&image_type=photo`);
//     const pixaBayVId = await axios.get(`https://pixabay.com/api/videos/?key=${process.env.PIXABAY_KEY}&q=${name}`);

//     res.status(200).send(pixaBay.data)
//     } catch (error) {
//         console.log(error);
//     }
// })

// Post Route
app.post('/info', (req, res)=>{
    const body = req.body;
    const {date, name, weather, photo, description, icon} = body

})

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
