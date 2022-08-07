

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// import All the Routers
const userRoute = require('./Routers/Routes/user')
const searchRoutes = require('./Routers/Routes/search')
const remindRoutes = require('./Routers/Routes/reminder')

// imported the db file
require("./db/db")

/* Middleware*/

app.use(express.json());
// Cors
app.use(cors());
app.use(morgan("dev"));
app.use('/users', userRoute)
app.use('/search', searchRoutes)
app.use('/info', remindRoutes)


// Setup Server
const port = process.env.PORT || 5400;


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
