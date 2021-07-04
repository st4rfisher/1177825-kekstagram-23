
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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const hasDuplicates = (array) => new Set(array).size !== array.length;

export {generateRandomNumber, generateRandomID, isEscEvent, hasDuplicates};
