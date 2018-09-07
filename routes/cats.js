const express = require('express');
const catRouter = express.Router();

const catArray = [{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}, {
  imageURL: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
  imageDescription: "Grey siamese cat with bright green eyes, looking up to the camera.",
  name: "Tina",
  sex: "female",
  age: 3,
  breed: "Siamese",
  story: "Abandoned by previous owner."
  }, {
  imageURL: "http://www.catvet.ca/wp-content/uploads/2016/07/cathealth_kitty.jpg",
  imageDescription: "Tan-colored kitten pawing at the camera.",
  name: "Thunder",
  sex: "Male",
  age: 1,
  breed: "Tabby",
  story: "Owner moved to another country."
}]

catRouter.use(express.json());

catRouter.get('/cats', (req, res) => {
  return res.json(catArray[0]); // return the first cat in the array
})

catRouter.delete('/cats', (req, res) => {
  return res.json(catArray.shift()).sendStatus(200).end(); // delete the first dog in the array
})

module.exports = catRouter;