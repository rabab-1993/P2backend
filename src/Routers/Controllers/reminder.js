const remindModel = require("../../db/models/reminder");
const axios = require("axios").default;
require("dotenv").config();





//  get city Info
const getCityInfo = async (req, res) => {
    const {q} = req.query;
    try {
      const openweathermap = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_KEY}&q=${q}`
      );
      const pixaBay = await axios.get(
        `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${openweathermap.data.name}&image_type=photo`
      );
const data = [openweathermap.data, ...pixaBay.data.hits];

      res.status(200).send(data);
    } catch (error) {
      console.log(error);
    }
  
};

//  get all remainder
const getUserReminder = (req, res) => {
    const { userId } = req.query;
    remindModel
      .find({})
      .populate("userId")
      .where("userId")
      .equals(userId)
      .exec( (err, posts) => {
        if (err) return handleError(err);
        res.json(posts);
      });
  };


//  Creat new reminder
const newReminder = (req, res) => {
  const { cityName, date, description, temp, img, icon, userId } = req.body;
  const creatRemind = new remindModel ({
    cityName,
    date,
    description,
    temp,
    img,
    icon,
    userId
  });

  creatRemind
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Update reminder info

let updateRemindInfo = (req, res) => {};

module.exports = { newReminder, getCityInfo, updateRemindInfo, getUserReminder };
