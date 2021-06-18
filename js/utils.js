const generateRandomNumber = (minNumber, maxNumber) => Math.abs(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));

function generateRandomID (array, maxNumber) {
  if (array.length >= maxNumber) {
    return;
  }
  const newID = generateRandomNumber(1, maxNumber);
  if (array.indexOf(newID) < 0) {
    array.push(newID);
  }
  generateRandomID(array, maxNumber);
}

export {generateRandomNumber, generateRandomID};
