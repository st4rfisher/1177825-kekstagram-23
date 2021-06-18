import {generateCommentAttributes} from './generate-comment-attributes.js';
import {generateRandomNumber} from './utils.js';
import {comments} from './create-comments.js';
import {photos} from './create-photos.js';
const COMMENTS_COUNT = 10;

const generateRandomComments = () => {
  generateCommentAttributes();
  const photoComments = [];
  const randomNumber = generateRandomNumber(0, COMMENTS_COUNT);
  for (let commentIndex = 0; commentIndex <= randomNumber; commentIndex++) {
    const randomIndex = generateRandomNumber(0, comments.length - 1);
    if(photoComments.indexOf(comments[randomIndex]) < 0) {
      photoComments.push(comments[randomIndex]);
    }
  }
  return photoComments;
};

const addComments = () => {
  photos.forEach((photo) => {
    const index = photos.indexOf(photo);
    photos[index].comments = generateRandomComments();
  });
};

export {addComments};
