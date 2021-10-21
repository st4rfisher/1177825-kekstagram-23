import {photos} from './create-photos.js';
import {generateRandomNumber} from './utils.js';
import {addComments} from './add-comments.js';
const photosID = [];
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

const generatePhotoID = () => {
  photos.forEach((photo) => {
    const index = photos.indexOf(photo);
    photosID.push(index + 1);
    photos[index].id = photosID[index];
  });
};

const generateURL = () => {
  photos.forEach((photo) => {
    const index = photos.indexOf(photo);
    photos[index].url = `photos/${photosID[index]}.jpg`;
  });
};

const generateDescription = () => {
  photos.forEach((photo) => {
    const index = photos.indexOf(photo);
    photos[index].description = `Описание №${photosID[index]}`;
  });
};

const generateLikes = () => {
  photos.forEach((photo) => {
    const index = photos.indexOf(photo);
    photos[index].likes = generateRandomNumber(MIN_LIKES_COUNT, MAX_LIKES_COUNT);
  });
};

const generatePhotoAttributes = () => {
  generatePhotoID();
  generateURL();
  generateDescription();
  generateLikes();
  addComments();
};

export {generatePhotoAttributes};
