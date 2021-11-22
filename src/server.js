

const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios").default;
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// import All the Routers
const userRoute = require('./Routers/Routes/user')
const searchRoutes = require('./Routers/Routes/search')

// imported the db file
require("./db/db")

/* Middleware*/

app.use(express.json());
app.use('/users', userRoute)
app.use('/search', searchRoutes)

// Cors
app.use(cors());

// Setup Server
const port = process.env.PORT || 5400;

// Api Calls

app.get("/info/:name", async (req, res) => {
    const name = req.params.name;
  try {
    const openweathermap = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.WEATHER_KEY}`);
    const pixaBay = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${openweathermap.data.name}&image_type=photo`);

const data = [openweathermap.data, pixaBay.data]; 

  
    res.status(200).send(data)
   
  } catch (error) {
    console.log(error);
  }
});




// Post Route
app.post('/info', (req, res)=>{
    const body = req.body;
    const {date, name, weather, photo, description, icon} = body

})

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
