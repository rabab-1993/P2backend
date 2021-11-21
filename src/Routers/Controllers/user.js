const userModel = require('../../db/models/user');



// const getUsers = () =>{

// }

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

module.exports = {newUsersData}
