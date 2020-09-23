const assert = require("chai").assert;
const breedDetailsFromFile = require("../asyncBreeds");

describe("#breedDetailsFromFile", () => {
  it("Should provide, via callback, breed details for the Bombay breed", (done) => {
    breedDetailsFromFile("Bombay", (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expectedDesc, bombay);
      done();
    });
  });
  it("Should provide, via callback, undefined for a breed that does not exist", (done) => {
    breedDetailsFromFile("Saphire", (desc) => {
      assert.equal(undefined, desc);
      done();
    })
  })
});




// const returner = function(data) {
//   console.log('Return Value: ', data);
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', returner);
// // console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!