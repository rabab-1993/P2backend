const express = require("express");
const userRoutes = express.Router()
const {newUsersData} = require ("../Controllers/user")

userRoutes.get('/',(req, res) => {
    res.send('user page')
})
userRoutes.post('/', newUsersData)
userRoutes.put('/')

module.exports = userRoutes