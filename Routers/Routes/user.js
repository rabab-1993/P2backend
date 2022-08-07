const express = require("express");
const userRoutes = express.Router()
const {newUsersData, getUsers, updateUserInfo} = require ("../Controllers/user")

userRoutes.get('/', getUsers)
userRoutes.post('/', newUsersData)
userRoutes.put('/', updateUserInfo)

module.exports = userRoutes