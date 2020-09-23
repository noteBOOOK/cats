// asyncBreeds.js
const fs = require('fs');


const breedDetailsFromFile = function(breed, cbFunction) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      cbFunction(data)
    } else {
      cbFunction(undefined);
    }
  });
};


module.exports = breedDetailsFromFile;

const returner = function(data) {
  console.log('Return Value: ', data);
};

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', returner);
// // console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!