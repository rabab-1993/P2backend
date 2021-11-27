const userModel = require('../../db/models/user');


//  get All user Info
const getUsers = (req ,res) =>{
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

//  Creat new user
const newUsersData = (req, res) => {
    const {name,  userName, email, password} = req.body;
    const creatUser = new userModel ({
        name,  userName, email, password
    });

    creatUser.save().then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}

// Update user info

let updateUserInfo = (req, res) => {

}

module.exports = {newUsersData, getUsers, updateUserInfo}
