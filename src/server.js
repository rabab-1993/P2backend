data = {};


const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios')
const app = express();

const dotenv = require('dotenv');
dotenv.config();





/* Middleware*/

app.use(express.json())

// Cors 
const cors = require('cors');
app.use(cors());



// Api Setting





// Setup Server
const port = process.env.PORT || 5400;      

// Route 

app.get('/',(req,res)=>{
    res.send("hi its working")
})


// Post Route
// app.post('/', (req, res)=>{
//     const body = req.body;
    
// })

app.listen(port,()=>{
    console.log(`listening on port ${port}!`);
});