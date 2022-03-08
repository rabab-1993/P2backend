const axios = require("axios").default;
require("dotenv").config()


// fetching from Pixabay API
const getPhotos = async (req, res) => {
    const {q} = req.query;
    try {
    // const pixaBayVId = await axios.get(`https://pixabay.com/api/videos/?key=${process.env.PIXABAY_KEY}&q=${q}`);
    const pixaBay = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&image_type=photo&category=places&q=${q}`);
    const data = pixaBay.data.hits; 
    // const data = [...pixaBayVId.data.hits, ...pixaBay.data.hits]; 
    res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
    }
}
const getVideos = async (req, res) => {
    const {q} = req.query;
    try {
    const pixaBayVId = await axios.get(`https://pixabay.com/api/videos/?key=${process.env.PIXABAY_KEY}&q=${q}`);
    // const pixaBay = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&image_type=photo&category=places&q=${q}`);
    const data = pixaBayVId.data.hits; 
    res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getPhotos, getVideos};